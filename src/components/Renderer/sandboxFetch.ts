// anonymous.4open.science serves pages with `CSP: sandbox` (no allow-same-origin): the page
// has a null origin and the host sends no CORS headers, so fetch() of our own files fails.
// There, requests under static/{dataset,videos}/ are served from static/<dir>_js/<path>.js,
// loaded via <script> (built by scripts/pack-dataset.mjs). Importing this module installs the shim.
export const SANDBOXED = window.origin === 'null';

const PACKED_DIRS = ['dataset', 'videos'];
const nativeFetch = window.fetch.bind(window);
const inFlight = new Map<string, Promise<Uint8Array<ArrayBuffer>>>();
const resolvers = new Map<Element, (b64: string) => void>();
(window as any).__roraData = (_path: string, b64: string) => resolvers.get(document.currentScript!)?.(b64);

const decode = (b64: string): Uint8Array<ArrayBuffer> =>
  (Uint8Array as any).fromBase64?.(b64) ?? Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

function loadViaScript(src: string): Promise<Uint8Array<ArrayBuffer>> {
  let p = inFlight.get(src);
  if (p) return p;
  const s = document.createElement('script');
  s.src = src;
  p = new Promise<Uint8Array<ArrayBuffer>>((resolve, reject) => {
    resolvers.set(s, (b64) => resolve(decode(b64)));
    s.onerror = () => reject(new TypeError(`Failed to load ${src}`));
    document.head.appendChild(s);
  }).finally(() => {
    inFlight.delete(src);
    resolvers.delete(s);
    s.remove();
  });
  inFlight.set(src, p);
  return p;
}

if (SANDBOXED) {
  window.fetch = (input, init) => {
    const { pathname } = new URL(input instanceof Request ? input.url : String(input), location.href);
    for (const dir of PACKED_DIRS) {
      const i = pathname.indexOf(`/static/${dir}/`);
      if (i === -1) continue;
      const path = decodeURIComponent(pathname.slice(i + `/static/${dir}/`.length));
      return loadViaScript(`./static/${dir}_js/${path}.js`).then((bytes) => new Response(bytes));
    }
    return nativeFetch(input, init);
  };
}
