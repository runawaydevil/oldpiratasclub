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
    'docs/.vitepress/.temp/',
    '*.d.ts',
    'coverage/',
    'tests/',
    // Ignorar arquivos Vue (geralmente não precisam de lint padrão)
    'docs/**/*.vue',
    // Ignorar arquivos de tema gerados automaticamente
    'docs/.vitepress/theme/**/*.js',
    // Permitir que docs/.vitepress/config.ts seja verificado
    // Ignorar apenas arquivos TypeScript em subdiretórios específicos se necessário
    'docs/utils/**/*.ts',
    'docs/components/**/*.ts',
    'docs/types/**/*.ts'
  ]
}