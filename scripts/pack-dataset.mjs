// Packs static/dataset/<path> into static/dataset_js/<path>.js as base64 wrapped in a
// __roraData() call. anonymous.4open.science serves pages sandboxed (null origin, no
// CORS), so fetch() of our own files fails there but <script> tags still load.
// See src/components/Renderer/sandboxFetch.ts. Re-run after changing the dataset.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';

const files = execFileSync('git', ['ls-files', 'static/dataset'], { encoding: 'utf8' }).split('\n').filter(Boolean);
rmSync('static/dataset_js', { recursive: true, force: true });
for (const f of files) {
  const rel = f.slice('static/dataset/'.length);
  const out = `static/dataset_js/${rel}.js`;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, `__roraData(${JSON.stringify(rel)},"${readFileSync(f).toString('base64')}")\n`);
}
console.log(`packed ${files.length} files into static/dataset_js/`);
