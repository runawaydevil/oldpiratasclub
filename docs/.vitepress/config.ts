import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { readFileSync } from 'fs'
import { resolve } from 'path'


// Lê a versão do package.json
const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8'))
const version = packageJson.version

// Configuração do RSS
const baseUrl = 'https://piratas.club'

const rssOptions: RSSOptions = {
  title: 'piratas.club',
  baseUrl,
  copyright: 'Copyright © 2024-2026 runawaydevil',
  description: 'Vault de Recursos Digitais - Feed de atualizações e novos guias',
  language: 'pt-BR',
  author: {
    name: 'runawaydevil',
    email: 'pablomurad@pm.me',
    link: 'https://github.com/runawaydevil'
  },
  filename: 'feed.rss',
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  filter: (_post, _idx) => true
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "#hacking",
  description: "Uma coleção organizada de recursos, ferramentas e informações úteis para desenvolvedores, hackers éticos e entusiastas de tecnologia — explorando o lado criativo, técnico e livre da internet.",
  base: '/',
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true, // ativa a funcionalidade
  head: [
    // Meta viewport para responsividade mobile
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes' }],
    
    // Favicon e ícones - múltiplos formatos para compatibilidade
    ['link', { rel: 'icon', href: '/favico.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png', sizes: '16x16' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.png', sizes: '180x180' }],
    ['link', { rel: 'shortcut icon', href: '/favico.ico' }],
    
    // Fontes
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap' }],
    
    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'pirataria, recursos digitais, ferramentas, guias, automação, streaming, downloads, privacy, hacking' }],
    ['meta', { name: 'author', content: 'runawaydevil (Pablo Murad)' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'pt-BR' }],
    
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'piratas.club' }],
    ['meta', { property: 'og:image', content: 'https://piratas.club/dl1.png' }],
    ['meta', { property: 'og:image:alt', content: 'piratas.club - Vault de Recursos Digitais' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@runawayd3vil' }],
    ['meta', { name: 'twitter:creator', content: '@runawayd3vil' }],
    
    // Manifest
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    
    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://piratas.club/' }]
  ],
  vite: {
    plugins: [
      AutoSidebar({
        // caminho da pasta docs (default já é /docs)
        path: '/docs',
        ignoreList: ['index.md'],
        collapsed: false,

        // 👇 habilite um (ou os dois) conforme preferir
        titleFromFile: false,         // usa o H1 do .md
        titleFromFileByYaml: true    // usa "title:" do frontmatter
      }),
      RssPlugin(rssOptions),
      Icons({
        compiler: 'vue3',
        autoInstall: true
      }),
      Components({
        resolvers: [
          IconsResolver({
            prefix: 'i',
            enabledCollections: ['mdi', 'carbon', 'fa-solid']
          })
        ]
      }),

    ]
  },
  appearance: true, // PERMITIR TROCA DE TEMA (dark/light)
  themeConfig: {
    logo: '/icon.png',
    siteTitle: '#hacking',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: '📖 Diário de Bordo', link: '/dbordo/' },
      {
        text: 'Redes',
        items: [
          { text: '🌐 Site Pessoal', link: 'https://pablo.space' },
          { text: '🐙 GitHub', link: 'https://github.com/runawaydevil' },
          { text: '🐦 Twitter (X)', link: 'https://x.com/runawayd3vil' },
          { text: '🧠 Reddit', link: 'https://reddit.com/u/runawaydevil' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/runawaydevil' },
      { icon: 'twitter', link: 'https://x.com/runawayd3vil' }
    ],



    outline: {
      level: [2, 4],
      label: 'Nesta página'
    },

    lastUpdated: {
      text: 'Última atualização', // legenda exibida
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    // Sidebar específico para diferentes rotas
    sidebar: {
    },

    footer: {
      message: `Feito com ❤️ para a comunidade | v${version}`,
      copyright: '2024-2026 • runawaydevil'
    },
  }
})
