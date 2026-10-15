// Packs static/<dir>/<path> into static/<dir>_js/<path>.js as base64 wrapped in a
// __roraData() call. anonymous.4open.science serves pages sandboxed (null origin, no
// CORS), so fetch() of our own files fails there but <script> tags still load.
// See src/components/Renderer/sandboxFetch.ts. Re-run after changing these files.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';

for (const dir of ['dataset', 'videos']) {
  const files = execFileSync('git', ['ls-files', `static/${dir}`], { encoding: 'utf8' }).split('\n').filter(Boolean);
  rmSync(`static/${dir}_js`, { recursive: true, force: true });
  for (const f of files) {
    const rel = f.slice(`static/${dir}/`.length);
    const out = `static/${dir}_js/${rel}.js`;
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, `__roraData(${JSON.stringify(rel)},"${readFileSync(f).toString('base64')}")\n`);
  }
  console.log(`packed ${files.length} files into static/${dir}_js/`);
}
