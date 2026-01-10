// Testes básicos para CI/CD
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

describe('Build Tests', () => {
  test('Build directory exists', () => {
    const buildDir = path.join(__dirname, '../docs/.vitepress/dist')
    expect(fs.existsSync(buildDir)).toBe(true)
  })

  test('Index.html exists in build', () => {
    const indexFile = path.join(__dirname, '../docs/.vitepress/dist/index.html')
    expect(fs.existsSync(indexFile)).toBe(true)
  })

  test('Assets directory exists', () => {
    const assetsDir = path.join(__dirname, '../docs/.vitepress/dist/assets')
    expect(fs.existsSync(assetsDir)).toBe(true)
  })
})

describe('Config Tests', () => {
  test('Package.json is valid', () => {
    const packageJson = require('../package.json')
    expect(packageJson.name).toBe('piratas-club-vault')
    expect(packageJson.version).toBeDefined()
  })

  test('TypeScript config is valid', () => {
    const tsconfigPath = path.join(__dirname, '../tsconfig.json')
    expect(fs.existsSync(tsconfigPath)).toBe(true)
  })
})

describe('Content Tests', () => {
  test('Main sections exist', () => {
    const fhmyIndex = path.join(__dirname, '../docs/dbordo/fhmy/index.md')
    const pirataIndex = path.join(__dirname, '../docs/dbordo/pirataria-thread/index.md')
    
    expect(fs.existsSync(fhmyIndex)).toBe(true)
    expect(fs.existsSync(pirataIndex)).toBe(true)
  })

  test('Public assets exist', () => {
    const robotsTxt = path.join(__dirname, '../docs/public/robots.txt')
    const cname = path.join(__dirname, '../docs/public/CNAME')
    
    expect(fs.existsSync(robotsTxt)).toBe(true)
    expect(fs.existsSync(cname)).toBe(true)
  })
})