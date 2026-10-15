// anonymous.4open.science serves pages with `CSP: sandbox` (no allow-same-origin): the page
// has a null origin and the host sends no CORS headers, so fetch() of our own dataset fails.
// There, dataset requests are served from static/dataset_js/<path>.js, loaded via <script>
// (built by scripts/pack-dataset.mjs). Importing this module installs the fetch shim.
export const SANDBOXED = window.origin === 'null';

const DATASET = '/static/dataset/';
const nativeFetch = window.fetch.bind(window);
const inFlight = new Map<string, Promise<Uint8Array<ArrayBuffer>>>();
const resolvers = new Map<string, (b64: string) => void>();
(window as any).__roraData = (path: string, b64: string) => resolvers.get(path)?.(b64);

const decode = (b64: string): Uint8Array<ArrayBuffer> =>
  (Uint8Array as any).fromBase64?.(b64) ?? Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

function loadViaScript(path: string): Promise<Uint8Array<ArrayBuffer>> {
  let p = inFlight.get(path);
  if (p) return p;
  const s = document.createElement('script');
  s.src = `./static/dataset_js/${path}.js`;
  p = new Promise<Uint8Array<ArrayBuffer>>((resolve, reject) => {
    resolvers.set(path, (b64) => resolve(decode(b64)));
    s.onerror = () => reject(new TypeError(`Failed to load ${s.src}`));
    document.head.appendChild(s);
  }).finally(() => {
    inFlight.delete(path);
    resolvers.delete(path);
    s.remove();
  });
  inFlight.set(path, p);
  return p;
}

if (SANDBOXED) {
  window.fetch = (input, init) => {
    const url = new URL(input instanceof Request ? input.url : String(input), location.href);
    const i = url.pathname.indexOf(DATASET);
    if (i === -1) return nativeFetch(input, init);
    return loadViaScript(decodeURIComponent(url.pathname.slice(i + DATASET.length))).then((bytes) => new Response(bytes));
  };
}
