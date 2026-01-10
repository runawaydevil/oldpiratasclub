module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Permitir console.log em desenvolvimento
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    
    // Básico
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
  },
  ignorePatterns: [
    'node_modules/',
    'docs/.vitepress/dist/',
    'docs/.vitepress/cache/',
    '*.d.ts',
    'coverage/',
    'tests/',
    'docs/**/*.ts',
    'docs/**/*.vue'
  ]
}