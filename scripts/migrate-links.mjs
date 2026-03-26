/**
 * Prefix root-relative links in migrated markdown trees.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.join(__dirname, '..', 'docs')

function walkMd(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walkMd(p, out)
    else if (e.name.endsWith('.md')) out.push(p)
  }
  return out
}

function rewriteMegathread(content) {
  let c = content
  c = c.replace(/^(\s*link:\s*)\/(?!\/)(?!megathread\/)(?!fmhy\/)/gm, '$1/megathread/')
  c = c.replace(/^(\s*src:\s*)\/(?!\/)(?!megathread\/)(?!fmhy\/)/gm, '$1/megathread/')
  c = c.replace(/^(\s*dark:\s*)\/(?!\/)(?!megathread\/)(?!fmhy\/)/gm, '$1/megathread/')
  c = c.replace(/^(\s*light:\s*)\/(?!\/)(?!megathread\/)(?!fmhy\/)/gm, '$1/megathread/')
  c = c.replace(
    /\]\(\/(?!\/)(?!megathread\/)(?!fmhy\/)(?!http)(?!mailto:)([^)]+)\)/g,
    '](/megathread/$1)'
  )
  return c
}

function rewriteFmhy(content) {
  let c = content
  c = c.replace(/^(\s*link:\s*)\/(?!\/)(?!fmhy\/)(?!megathread\/)/gm, '$1/fmhy/')
  c = c.replace(/^(\s*src:\s*)\/(?!\/)(?!fmhy\/)(?!megathread\/)/gm, '$1/fmhy/')
  c = c.replace(
    /\]\(\/(?!\/)(?!fmhy\/)(?!megathread\/)(?!http)(?!mailto:)([^)]+)\)/g,
    '](/fmhy/$1)'
  )
  return c
}

const megDir = path.join(docsRoot, 'megathread')
for (const f of walkMd(megDir)) {
  const raw = fs.readFileSync(f, 'utf8')
  fs.writeFileSync(f, rewriteMegathread(raw), 'utf8')
}

const fmhyDir = path.join(docsRoot, 'fmhy')
for (const f of walkMd(fmhyDir)) {
  const raw = fs.readFileSync(f, 'utf8')
  fs.writeFileSync(f, rewriteFmhy(raw), 'utf8')
}

console.log('migrate-links: done')
