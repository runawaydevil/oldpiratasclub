import { defineConfig } from 'vitepress'
import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8'))
const version = packageJson.version

const baseUrl = 'https://piratas.club'

const rssOptions: RSSOptions = {
  title: 'piratas.club',
  baseUrl,
  copyright: 'Copyright © 2024-2026 runawaydevil',
  description: 'Vault de Recursos Digitais — Megathread (PT) e FMHY Wiki (EN)',
  language: 'pt-BR',
  author: {
    name: 'runawaydevil',
    email: 'pablomurad@pm.me',
    link: 'https://piratas.club'
  },
  filename: 'feed.rss',
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  filter: (_post, _idx) => true
}

const sidebarMegathread = [
  {
    text: 'Tópicos',
    collapsed: false,
    items: [
      { text: '⚓️ Perguntas Frequentes', link: '/megathread/faq' },
      { text: '🧭 Uso Geral', link: '/megathread/sites-geral' },
      { text: '⛩️ Otaku', link: '/megathread/otaku' },
      { text: '📚 Livros', link: '/megathread/livros' },
      { text: '🧠 Educacional', link: '/megathread/educacional' },
      { text: '🕹️ Emuladores', link: '/megathread/emuladores-roms' },
      { text: '🎮 Jogos', link: '/megathread/jogos' },
      { text: '📱 Mobile', link: '/megathread/mobile' },
      { text: '🎦 Filmes e TV', link: '/megathread/filmes-tv' },
      { text: '🎹 Música', link: '/megathread/musica' },
      { text: '⚙️ Softwares', link: '/megathread/softwares' },
      { text: '⚽ Esportes', link: '/megathread/esportes' },
      { text: '🧰 Ferramentas', link: '/megathread/ferramentas' },
      { text: '🌊 Trackers', link: '/megathread/trackers' },
      { text: '🏴‍☠️ Warez', link: '/megathread/warez' },
      { text: '☣️ Sites e Programas Perigosos', link: '/megathread/sites-inseguros' }
    ]
  },
  {
    text: 'Recomendado',
    collapsed: false,
    items: [
      { text: '📚 Nomenclatura', link: '/megathread/util/nomenclatura' },
      { text: '🔗 Publicações úteis', link: '/megathread/publicacoes' },
      { text: '🗺️ Guias', link: '/megathread/guias' },
      { text: '🔒 Privacidade', link: '/megathread/privacidade' },
      { text: '✨ Coletânea', link: '/megathread/util/coletanea' }
    ]
  },
  {
    text: 'Outros Tesouros',
    collapsed: true,
    items: [
      { text: '📁 Awesome Warez', link: 'https://lkrjangid1.github.io/Awesome-Warez/' },
      { text: '📁 Champagne Piracy Wiki', link: 'https://champagne.pages.dev/' },
      { text: '📁 Piracy Index', link: 'https://piracy.vercel.app/' },
      { text: '📁 MediaSavvy', link: 'https://mediasavvy.pages.dev/' },
      { text: '📁 EverythingMoe', link: 'https://everythingmoe.com/' },
      { text: '📁 FMHY', link: 'https://fmhy.net/' },
      { text: '📁 Pirated Games', link: 'https://rentry.org/pgames/' },
      { text: '📁 Ripped', link: 'https://ripped.guide/' },
      { text: '📁 The Index', link: 'https://theindex.moe/' },
      { text: '📁 Wotaku', link: 'https://wotaku.wiki/' },
      { text: '📁 Miyomi', link: 'https://miyomi.pages.dev/' }
    ]
  },
  {
    text: 'Diversos',
    collapsed: true,
    items: [
      { text: '🚫 Adulto', link: '/megathread/outros/adulto' },
      { text: '🏔️ Codeberg', link: 'https://codeberg.org/pirataria/megathread' }
    ]
  }
]

const sidebarFmhy = [
  { text: '📖 Beginners Guide', link: '/fmhy/beginners-guide' },
  { text: '💡 Contribute', link: '/fmhy/other/contributing' },
  {
    text: 'Wiki',
    collapsed: false,
    items: [
      { text: 'Adblocking / Privacy', link: '/fmhy/privacy' },
      { text: 'Artificial Intelligence', link: '/fmhy/ai' },
      { text: 'Movies / TV / Anime', link: '/fmhy/video' },
      { text: 'Music / Podcasts / Radio', link: '/fmhy/audio' },
      { text: 'Gaming / Emulation', link: '/fmhy/gaming' },
      { text: 'Books / Comics / Manga', link: '/fmhy/reading' },
      { text: 'Downloading', link: '/fmhy/downloading' },
      { text: 'Torrenting', link: '/fmhy/torrenting' },
      { text: 'Educational', link: '/fmhy/educational' },
      { text: 'Android / iOS', link: '/fmhy/mobile' },
      { text: 'Linux / macOS', link: '/fmhy/linux-macos' },
      { text: 'Non-English', link: '/fmhy/non-english' },
      { text: 'Miscellaneous', link: '/fmhy/misc' }
    ]
  },
  {
    text: 'Tools',
    collapsed: false,
    items: [
      { text: 'System Tools', link: '/fmhy/system-tools' },
      { text: 'File Tools', link: '/fmhy/file-tools' },
      { text: 'Internet Tools', link: '/fmhy/internet-tools' },
      { text: 'Social Media Tools', link: '/fmhy/social-media-tools' },
      { text: 'Text Tools', link: '/fmhy/text-tools' },
      { text: 'Gaming Tools', link: '/fmhy/gaming-tools' },
      { text: 'Image Tools', link: '/fmhy/image-tools' },
      { text: 'Video Tools', link: '/fmhy/video-tools' },
      { text: 'Audio Tools', link: '/fmhy/audio#audio-tools' },
      { text: 'Educational Tools', link: '/fmhy/educational#educational-tools' },
      { text: 'Developer Tools', link: '/fmhy/developer-tools' }
    ]
  },
  {
    text: 'More',
    collapsed: true,
    items: [
      { text: '⚠️ Unsafe Sites', link: '/fmhy/unsafe' },
      { text: '📦 Storage', link: '/fmhy/storage' },
      { text: '🏠 Selfhosting', link: '/fmhy/other/selfhosting' },
      { text: '🏞 Wallpapers', link: '/fmhy/other/wallpapers' },
      { text: '💙 Feedback', link: '/fmhy/feedback' },
      { text: '🧪 Sandbox', link: '/fmhy/sandbox' },
      { text: '🏠 Startpage', link: '/fmhy/startpage' }
    ]
  }
]

const sidebarHome = [
  {
    text: 'Navegação',
    items: [
      { text: 'Início', link: '/' },
      { text: 'Megathread (PT)', link: '/megathread/' },
      { text: 'FMHY Wiki (EN)', link: '/fmhy/' }
    ]
  }
]

const sidebar = {
  '/megathread/': sidebarMegathread,
  '/fmhy/': sidebarFmhy,
  '/': sidebarHome
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '#hacking',
  description:
    'Vault de recursos — Megathread em português e espelho da wiki FMHY (inglês).',
  base: '/',
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes' }],
    ['link', { rel: 'icon', href: '/favico.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png', sizes: '16x16' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.png', sizes: '180x180' }],
    ['link', { rel: 'shortcut icon', href: '/favico.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap' }],
    ['meta', { name: 'keywords', content: 'pirataria, FMHY, megathread, recursos digitais, ferramentas, guias, privacy' }],
    ['meta', { name: 'author', content: 'runawaydevil (Pablo Murad)' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'pt-BR' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'piratas.club' }],
    ['meta', { property: 'og:image', content: 'https://piratas.club/dl1.png' }],
    ['meta', { property: 'og:image:alt', content: 'piratas.club - Vault de Recursos Digitais' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'canonical', href: 'https://piratas.club/' }]
  ],
  vite: {
    plugins: [
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
      })
    ]
  },
  appearance: true,
  themeConfig: {
    logo: '/icon.png',
    siteTitle: '#hacking',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Megathread', link: '/megathread/' },
      { text: 'FMHY Wiki', link: '/fmhy/' }
    ],

    socialLinks: [],

    outline: {
      level: [2, 4],
      label: 'Nesta página'
    },

    lastUpdated: {
      text: 'Última atualização',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    sidebar,

    footer: {
      message: `Feito com ❤️ para a comunidade | versão ${version} mar/26`,
      copyright: '2024-2026 • runawaydevil'
    }
  }
})
