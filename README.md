# piratas.club

[![VitePress](https://img.shields.io/badge/VitePress-1.5.0-646CFF?style=flat-square&logo=vitepress&logoColor=white)](https://vitepress.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.22-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

Repositório de documentação estática construído com VitePress, servindo como vault de recursos digitais, guias técnicos e ferramentas organizadas para a comunidade.

**Site:** [piratas.club](https://piratas.club) | **Repositório:** [github.com/runawaydevil/oldpiratasclub](https://github.com/runawaydevil/oldpiratasclub)

## Overview

Este projeto implementa um site de documentação estática usando VitePress como framework base, com extensões customizadas em Vue.js 3 e TypeScript. O conteúdo é organizado em seções principais (Diário de Bordo, Blog) e processado através de Static Site Generation (SSG) para máxima performance.

A arquitetura foi projetada para escalabilidade, com sistema de indexação de conteúdo, engine de similaridade para recomendações, e componentes Vue reutilizáveis para interatividade no cliente.

## Arquitetura

### Stack Principal

- **VitePress 1.5.0** - Framework de documentação estática baseado em Vite
- **Vue.js 3.5.22** - Framework reativo (Composition API)
- **TypeScript 5.0.0** - Tipagem estática
- **Node.js 20+** - Runtime requirement

### Estrutura de Diretórios

```
docs/
├── .vitepress/          # Configuração VitePress
│   ├── config.ts        # Configuração principal
│   └── theme/           # Tema customizado
├── components/          # Componentes Vue
│   ├── content-discovery/  # Sistema de descoberta
│   └── interactivity/      # Sistema interativo
├── utils/               # Utilitários TypeScript
├── dbordo/              # Conteúdo principal
│   ├── fhmy/            # Free Media Heck Yeah
│   └── pirataria-thread/ # Megathread Pirata
├── blog/                # Posts do blog
└── public/              # Assets estáticos
```

### Componentes Principais

**Content Discovery:**
- `RelatedResources.vue` - Exibe recursos relacionados usando engine de similaridade
- `FilterControls.vue` - Sistema de filtros por categoria/tag/tipo
- `TagsPage.vue` - Visualização de tags e categorias

**Interactivity:**
- `RatingSystem.vue` - Sistema de avaliação (1-5 estrelas) com persistência em LocalStorage
- `CommentsSystem.vue` - Placeholder para integração com Giscus

**Utilities:**
- `ContentIndexer` - Indexação de conteúdo Markdown
- `SimilarityEngine` - Algoritmos de similaridade (Jaccard, TF-IDF, Levenshtein)
- `PageMetadataExtractor` - Extração de metadados do DOM/VitePress
- `RatingSystem` - Gerenciamento de avaliações com cache
- `LocalStorageManager` - Persistência de dados do usuário

### Decisões Técnicas

- **SSG over SSR**: Escolhido para performance e simplicidade de deploy
- **TypeScript strict mode**: Tipagem rigorosa para reduzir erros em runtime
- **VitePress plugins**: Auto-sidebar, RSS feed, ícones automáticos
- **LocalStorage**: Sistema de ratings funciona offline, sem backend
- **Modular architecture**: Separação clara entre componentes, utils e conteúdo

## Pré-requisitos

- Node.js >= 20.0.0
- npm >= 9.0.0 (ou equivalente)
- Git (para clone e versionamento)

## Instalação e Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/runawaydevil/oldpiratasclub.git
cd oldpiratasclub

# Instale as dependências
npm install

# Execute em modo desenvolvimento (hot-reload)
npm run dev

# Build para produção
npm run build

# Preview do build local
npm run preview
```

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento (porta padrão: 5173)
- `npm run build` - Build de produção (output: `docs/.vitepress/dist`)
- `npm run preview` - Preview local do build
- `npm run lint` - Verificação ESLint do config.ts
- `npm run lint:fix` - Correção automática de problemas ESLint
- `npm run type-check` - Verificação TypeScript sem emit
- `npm run test` - Execução de testes Jest
- `npm run ci` - Pipeline completo (type-check + lint + test + build)
- `npm run deploy:cloudflare` - Build + deploy no Cloudflare Pages

## Build e Deploy

### Processo de Build

O build utiliza VitePress para gerar arquivos estáticos otimizados:

1. Processamento de Markdown com frontmatter
2. Compilação de componentes Vue
3. Geração de índices e metadados
4. Otimização de assets (CSS, JS, imagens)
5. Output final em `docs/.vitepress/dist`

### CI/CD

**GitHub Actions** (`.github/workflows/deploy.yml`):
- Trigger: push para branch `main` ou workflow_dispatch
- Jobs:
  1. **build**: Instala dependências, executa CI checks, gera artifact
  2. **deploy**: Deploy automático para GitHub Pages
  3. **deploy-cloudflare**: Deploy opcional para Cloudflare Pages (requer secrets)

**Jenkins** (alternativo):
- Pipeline completo com stages: checkout, setup, install, test, lint, build, deploy
- Deploy via SSH/rsync para servidor próprio

**Cloudflare Pages** (integração Git): o projeto deve estar ligado a este repositório (`runawaydevil/oldpiratasclub`), não ao `runawaydevil.github.io`. Em **Settings → Builds**, defina **Build command** `npm ci --legacy-peer-deps && npm run build` e **Build output directory** `docs/.vitepress/dist` (raiz do repositório vazia). Só o `wrangler.json` com `pages_build_output_dir` não executa o build.

### Ambientes

- **Produção**: GitHub Pages (piratas.club) + Cloudflare Pages (backup)
- **Staging**: Branch `main` (deploy automático)
- **Desenvolvimento**: Local via `npm run dev`

## Estrutura do Projeto

### Configuração VitePress

O arquivo `docs/.vitepress/config.ts` contém:
- Configuração de plugins (AutoSidebar, RSS, Icons, Components)
- Meta tags para SEO
- Navegação e sidebar
- Configuração de tema (dark/light mode)

### Tema Customizado

Dois arquivos de tema coexistem:
- `docs/.vitepress/theme/index.ts` - Tema principal (TypeScript, completo)
- `docs/.vitepress/theme/index.js` - Fallback (JavaScript, básico)

O tema customizado adiciona:
- Sistema de favicon com fallback
- Persistência de preferência de tema
- Menu mobile funcional
- Injeção de componentes no slot `doc-after`

### Sistema de Indexação

O `BuildTimeIndexer` escaneia recursivamente arquivos Markdown e gera:
- Índice de páginas com metadados
- Índice de tags com contagem
- Índice de categorias com subcategorias

Atualmente preparado para build-time, pode ser integrado ao processo de build do VitePress.

## Tecnologias e Dependências

### Dependências de Produção

- `vitepress`: ^1.5.0 - Framework base
- `vue`: ^3.5.22 - Framework frontend
- `gray-matter`: ^4.0.3 - Parsing de frontmatter YAML
- `vite-plugin-vitepress-auto-sidebar`: ^1.7.1 - Geração automática de sidebar

### Dependências de Desenvolvimento

- `typescript`: ^5.0.0 - Compilador TypeScript
- `@typescript-eslint/parser`: ^6.21.0 - Parser ESLint para TS
- `@typescript-eslint/eslint-plugin`: ^6.21.0 - Plugin ESLint para TS
- `eslint`: ^8.0.0 - Linter JavaScript/TypeScript
- `jest`: ^30.2.0 - Framework de testes
- `wrangler`: ^4.45.4 - CLI do Cloudflare Workers/Pages

### Plugins VitePress

- `vitepress-plugin-rss`: ^0.3.2 - Geração de feed RSS
- `unplugin-icons`: ^22.4.2 - Sistema de ícones (MDI, Carbon, FontAwesome)
- `unplugin-vue-components`: ^29.1.0 - Importação automática de componentes

## Contribuindo

Este projeto segue os princípios do software livre. Contribuições são bem-vindas.

### Guidelines

1. **Fork e Branch**: Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. **Commits**: Use mensagens descritivas e siga convenções de commit
3. **Code Style**: TypeScript strict mode, ESLint configurado
4. **Testes**: Execute `npm run ci` antes de fazer push
5. **Pull Request**: Descreva claramente as mudanças e o motivo

### Áreas de Contribuição

- Adição de conteúdo (guias, recursos, links)
- Melhorias na organização e estrutura
- Correção de bugs
- Melhorias de performance
- Traduções
- Documentação técnica

## Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo `LICENSE` para detalhes.

## Créditos

**Mantenedor:** [runawaydevil](https://github.com/runawaydevil) (Pablo Murad)

**Contato:**
- Email: pablomurad@pm.me
- Site: [pablo.space](https://pablo.space)
- GitHub: [@runawaydevil](https://github.com/runawaydevil)

**Reconhecimentos:**
- Comunidades r/pirataria e r/piracy por recursos e inspiração
- Projetos Awesome Lists pela organização
- Archive.org e Software Heritage pela preservação digital

## Disclaimer Legal

Este é um diretório educacional que organiza links e recursos públicos. Não hospedamos conteúdo protegido por direitos autorais. Todo conteúdo é para fins educacionais e de pesquisa. Cada usuário é responsável pelo uso que faz das informações aqui disponibilizadas.

---

*Copyright © 2023-2026 RunawayDevil*
