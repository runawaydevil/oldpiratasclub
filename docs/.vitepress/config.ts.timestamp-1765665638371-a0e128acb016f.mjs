// docs/.vitepress/config.ts
import { defineConfig } from "file:///Z:/C%C3%B3digos/oldpiratasclub/node_modules/vitepress/dist/node/index.js";
import AutoSidebar from "file:///Z:/C%C3%B3digos/oldpiratasclub/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";
import { RssPlugin } from "file:///Z:/C%C3%B3digos/oldpiratasclub/node_modules/vitepress-plugin-rss/dist/index.mjs";
import Icons from "file:///Z:/C%C3%B3digos/oldpiratasclub/node_modules/unplugin-icons/dist/vite.js";
import Components from "file:///Z:/C%C3%B3digos/oldpiratasclub/node_modules/unplugin-vue-components/dist/vite.js";
import IconsResolver from "file:///Z:/C%C3%B3digos/oldpiratasclub/node_modules/unplugin-icons/dist/resolver.js";
import { readFileSync } from "fs";
import { resolve } from "path";
var __vite_injected_original_dirname = "Z:\\C\xF3digos\\oldpiratasclub\\docs\\.vitepress";
var packageJson = JSON.parse(readFileSync(resolve(__vite_injected_original_dirname, "../../package.json"), "utf-8"));
var version = packageJson.version;
var baseUrl = "https://piratas.club";
var rssOptions = {
  title: "piratas.club",
  baseUrl,
  copyright: "Copyright \xA9 2024-2026 runawaydevil",
  description: "Vault de Recursos Digitais - Feed de atualiza\xE7\xF5es e novos guias",
  language: "pt-BR",
  author: {
    name: "runawaydevil",
    email: "pablomurad@pm.me",
    link: "https://github.com/runawaydevil"
  },
  filename: "feed.rss",
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  filter: (_post, _idx) => true
};
var config_default = defineConfig({
  title: "#hacking",
  description: "Uma cole\xE7\xE3o organizada de recursos, ferramentas e informa\xE7\xF5es \xFAteis para desenvolvedores, hackers \xE9ticos e entusiastas de tecnologia \u2014 explorando o lado criativo, t\xE9cnico e livre da internet.",
  base: "/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  // ativa a funcionalidade
  head: [
    // Meta viewport para responsividade mobile
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, user-scalable=yes" }],
    // Favicon e ícones
    ["link", { rel: "icon", href: "/icon.png", type: "image/png" }],
    ["link", { rel: "apple-touch-icon", href: "/icon.png" }],
    // Fontes
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" }],
    // SEO Meta Tags
    ["meta", { name: "keywords", content: "pirataria, recursos digitais, ferramentas, guias, automa\xE7\xE3o, streaming, downloads, privacy, hacking" }],
    ["meta", { name: "author", content: "runawaydevil (Pablo Murad)" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "language", content: "pt-BR" }],
    // Open Graph
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "piratas.club" }],
    ["meta", { property: "og:image", content: "https://piratas.club/dl1.png" }],
    ["meta", { property: "og:image:alt", content: "piratas.club - Vault de Recursos Digitais" }],
    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@runawayd3vil" }],
    ["meta", { name: "twitter:creator", content: "@runawayd3vil" }],
    // Manifest
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    // Canonical URL
    ["link", { rel: "canonical", href: "https://piratas.club/" }]
  ],
  vite: {
    plugins: [
      AutoSidebar({
        // caminho da pasta docs (default já é /docs)
        path: "/docs",
        ignoreList: ["index.md"],
        collapsed: false,
        // 👇 habilite um (ou os dois) conforme preferir
        titleFromFile: false,
        // usa o H1 do .md
        titleFromFileByYaml: true
        // usa "title:" do frontmatter
      }),
      RssPlugin(rssOptions),
      Icons({
        compiler: "vue3",
        autoInstall: true
      }),
      Components({
        resolvers: [
          IconsResolver({
            prefix: "i",
            enabledCollections: ["mdi", "carbon", "fa-solid"]
          })
        ]
      })
    ]
  },
  appearance: true,
  // PERMITIR TROCA DE TEMA (dark/light)
  themeConfig: {
    logo: "/icon.png",
    siteTitle: "#hacking",
    nav: [
      { text: "In\xEDcio", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "\u{1F4D6} Di\xE1rio de Bordo", link: "/dbordo/" },
      {
        text: "Redes",
        items: [
          { text: "\u{1F310} Site Pessoal", link: "https://pablo.space" },
          { text: "\u{1F419} GitHub", link: "https://github.com/runawaydevil" },
          { text: "\u{1F426} Twitter (X)", link: "https://x.com/runawayd3vil" },
          { text: "\u{1F9E0} Reddit", link: "https://reddit.com/u/runawaydevil" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/runawaydevil" },
      { icon: "twitter", link: "https://x.com/runawayd3vil" }
    ],
    outline: {
      level: [2, 4],
      label: "Nesta p\xE1gina"
    },
    lastUpdated: {
      text: "\xDAltima atualiza\xE7\xE3o",
      // legenda exibida
      formatOptions: {
        dateStyle: "long",
        timeStyle: "short"
      }
    },
    // Sidebar específico para diferentes rotas
    sidebar: {},
    footer: {
      message: `Feito com \u2764\uFE0F para a comunidade | v${version}`,
      copyright: "2024-2026 \u2022 runawaydevil"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlo6XFxcXENcdTAwRjNkaWdvc1xcXFxvbGRwaXJhdGFzY2x1YlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlo6XFxcXENcdTAwRjNkaWdvc1xcXFxvbGRwaXJhdGFzY2x1YlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9aOi9DJUMzJUIzZGlnb3Mvb2xkcGlyYXRhc2NsdWIvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IEF1dG9TaWRlYmFyIGZyb20gJ3ZpdGUtcGx1Z2luLXZpdGVwcmVzcy1hdXRvLXNpZGViYXInXHJcbmltcG9ydCB7IFJzc1BsdWdpbiwgUlNTT3B0aW9ucyB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tcnNzJ1xyXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXHJcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuXHJcblxyXG4vLyBMXHUwMEVBIGEgdmVyc1x1MDBFM28gZG8gcGFja2FnZS5qc29uXHJcbmNvbnN0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlLmpzb24nKSwgJ3V0Zi04JykpXHJcbmNvbnN0IHZlcnNpb24gPSBwYWNrYWdlSnNvbi52ZXJzaW9uXHJcblxyXG4vLyBDb25maWd1cmFcdTAwRTdcdTAwRTNvIGRvIFJTU1xyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vcGlyYXRhcy5jbHViJ1xyXG5cclxuY29uc3QgcnNzT3B0aW9uczogUlNTT3B0aW9ucyA9IHtcclxuICB0aXRsZTogJ3BpcmF0YXMuY2x1YicsXHJcbiAgYmFzZVVybCxcclxuICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQtMjAyNiBydW5hd2F5ZGV2aWwnLFxyXG4gIGRlc2NyaXB0aW9uOiAnVmF1bHQgZGUgUmVjdXJzb3MgRGlnaXRhaXMgLSBGZWVkIGRlIGF0dWFsaXphXHUwMEU3XHUwMEY1ZXMgZSBub3ZvcyBndWlhcycsXHJcbiAgbGFuZ3VhZ2U6ICdwdC1CUicsXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiAncnVuYXdheWRldmlsJyxcclxuICAgIGVtYWlsOiAncGFibG9tdXJhZEBwbS5tZScsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3J1bmF3YXlkZXZpbCdcclxuICB9LFxyXG4gIGZpbGVuYW1lOiAnZmVlZC5yc3MnLFxyXG4gIGxvZzogdHJ1ZSxcclxuICBpZ25vcmVIb21lOiB0cnVlLFxyXG4gIGlnbm9yZVB1Ymxpc2g6IGZhbHNlLFxyXG4gIGZpbHRlcjogKF9wb3N0LCBfaWR4KSA9PiB0cnVlXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB0aXRsZTogXCIjaGFja2luZ1wiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlVtYSBjb2xlXHUwMEU3XHUwMEUzbyBvcmdhbml6YWRhIGRlIHJlY3Vyc29zLCBmZXJyYW1lbnRhcyBlIGluZm9ybWFcdTAwRTdcdTAwRjVlcyBcdTAwRkF0ZWlzIHBhcmEgZGVzZW52b2x2ZWRvcmVzLCBoYWNrZXJzIFx1MDBFOXRpY29zIGUgZW50dXNpYXN0YXMgZGUgdGVjbm9sb2dpYSBcdTIwMTQgZXhwbG9yYW5kbyBvIGxhZG8gY3JpYXRpdm8sIHRcdTAwRTljbmljbyBlIGxpdnJlIGRhIGludGVybmV0LlwiLFxyXG4gIGJhc2U6ICcvJyxcclxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXHJcbiAgY2xlYW5VcmxzOiB0cnVlLFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLCAvLyBhdGl2YSBhIGZ1bmNpb25hbGlkYWRlXHJcbiAgaGVhZDogW1xyXG4gICAgLy8gTWV0YSB2aWV3cG9ydCBwYXJhIHJlc3BvbnNpdmlkYWRlIG1vYmlsZVxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAndmlld3BvcnQnLCBjb250ZW50OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT15ZXMnIH1dLFxyXG4gICAgXHJcbiAgICAvLyBGYXZpY29uIGUgXHUwMEVEY29uZXNcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaWNvbi5wbmcnLCB0eXBlOiAnaW1hZ2UvcG5nJyB9XSxcclxuICAgIFsnbGluaycsIHsgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsIGhyZWY6ICcvaWNvbi5wbmcnIH1dLFxyXG4gICAgXHJcbiAgICAvLyBGb250ZXNcclxuICAgIFsnbGluaycsIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyB9XSxcclxuICAgIFsnbGluaycsIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJywgY3Jvc3NvcmlnaW46ICcnIH1dLFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXAnIH1dLFxyXG4gICAgXHJcbiAgICAvLyBTRU8gTWV0YSBUYWdzXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6ICdwaXJhdGFyaWEsIHJlY3Vyc29zIGRpZ2l0YWlzLCBmZXJyYW1lbnRhcywgZ3VpYXMsIGF1dG9tYVx1MDBFN1x1MDBFM28sIHN0cmVhbWluZywgZG93bmxvYWRzLCBwcml2YWN5LCBoYWNraW5nJyB9XSxcclxuICAgIFsnbWV0YScsIHsgbmFtZTogJ2F1dGhvcicsIGNvbnRlbnQ6ICdydW5hd2F5ZGV2aWwgKFBhYmxvIE11cmFkKScgfV0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXgsIGZvbGxvdycgfV0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdsYW5ndWFnZScsIGNvbnRlbnQ6ICdwdC1CUicgfV0sXHJcbiAgICBcclxuICAgIC8vIE9wZW4gR3JhcGhcclxuICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH1dLFxyXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6ICdwaXJhdGFzLmNsdWInIH1dLFxyXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogJ2h0dHBzOi8vcGlyYXRhcy5jbHViL2RsMS5wbmcnIH1dLFxyXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmltYWdlOmFsdCcsIGNvbnRlbnQ6ICdwaXJhdGFzLmNsdWIgLSBWYXVsdCBkZSBSZWN1cnNvcyBEaWdpdGFpcycgfV0sXHJcbiAgICBcclxuICAgIC8vIFR3aXR0ZXIgQ2FyZFxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjpjYXJkJywgY29udGVudDogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIH1dLFxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjpzaXRlJywgY29udGVudDogJ0BydW5hd2F5ZDN2aWwnIH1dLFxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjpjcmVhdG9yJywgY29udGVudDogJ0BydW5hd2F5ZDN2aWwnIH1dLFxyXG4gICAgXHJcbiAgICAvLyBNYW5pZmVzdFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvc2l0ZS53ZWJtYW5pZmVzdCcgfV0sXHJcbiAgICBcclxuICAgIC8vIENhbm9uaWNhbCBVUkxcclxuICAgIFsnbGluaycsIHsgcmVsOiAnY2Fub25pY2FsJywgaHJlZjogJ2h0dHBzOi8vcGlyYXRhcy5jbHViLycgfV1cclxuICBdLFxyXG4gIHZpdGU6IHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgQXV0b1NpZGViYXIoe1xyXG4gICAgICAgIC8vIGNhbWluaG8gZGEgcGFzdGEgZG9jcyAoZGVmYXVsdCBqXHUwMEUxIFx1MDBFOSAvZG9jcylcclxuICAgICAgICBwYXRoOiAnL2RvY3MnLFxyXG4gICAgICAgIGlnbm9yZUxpc3Q6IFsnaW5kZXgubWQnXSxcclxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAvLyBcdUQ4M0RcdURDNDcgaGFiaWxpdGUgdW0gKG91IG9zIGRvaXMpIGNvbmZvcm1lIHByZWZlcmlyXHJcbiAgICAgICAgdGl0bGVGcm9tRmlsZTogZmFsc2UsICAgICAgICAgLy8gdXNhIG8gSDEgZG8gLm1kXHJcbiAgICAgICAgdGl0bGVGcm9tRmlsZUJ5WWFtbDogdHJ1ZSAgICAvLyB1c2EgXCJ0aXRsZTpcIiBkbyBmcm9udG1hdHRlclxyXG4gICAgICB9KSxcclxuICAgICAgUnNzUGx1Z2luKHJzc09wdGlvbnMpLFxyXG4gICAgICBJY29ucyh7XHJcbiAgICAgICAgY29tcGlsZXI6ICd2dWUzJyxcclxuICAgICAgICBhdXRvSW5zdGFsbDogdHJ1ZVxyXG4gICAgICB9KSxcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgICBJY29uc1Jlc29sdmVyKHtcclxuICAgICAgICAgICAgcHJlZml4OiAnaScsXHJcbiAgICAgICAgICAgIGVuYWJsZWRDb2xsZWN0aW9uczogWydtZGknLCAnY2FyYm9uJywgJ2ZhLXNvbGlkJ11cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgICB9KSxcclxuXHJcbiAgICBdXHJcbiAgfSxcclxuICBhcHBlYXJhbmNlOiB0cnVlLCAvLyBQRVJNSVRJUiBUUk9DQSBERSBURU1BIChkYXJrL2xpZ2h0KVxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsb2dvOiAnL2ljb24ucG5nJyxcclxuICAgIHNpdGVUaXRsZTogJyNoYWNraW5nJyxcclxuXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnSW5cdTAwRURjaW8nLCBsaW5rOiAnLycgfSxcclxuICAgICAgeyB0ZXh0OiAnQmxvZycsIGxpbms6ICcvYmxvZy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1RDgzRFx1RENENiBEaVx1MDBFMXJpbyBkZSBCb3JkbycsIGxpbms6ICcvZGJvcmRvLycgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdSZWRlcycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzQ1x1REYxMCBTaXRlIFBlc3NvYWwnLCBsaW5rOiAnaHR0cHM6Ly9wYWJsby5zcGFjZScgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REMxOSBHaXRIdWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3J1bmF3YXlkZXZpbCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REMyNiBUd2l0dGVyIChYKScsIGxpbms6ICdodHRwczovL3guY29tL3J1bmF3YXlkM3ZpbCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRVx1RERFMCBSZWRkaXQnLCBsaW5rOiAnaHR0cHM6Ly9yZWRkaXQuY29tL3UvcnVuYXdheWRldmlsJyB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcnVuYXdheWRldmlsJyB9LFxyXG4gICAgICB7IGljb246ICd0d2l0dGVyJywgbGluazogJ2h0dHBzOi8veC5jb20vcnVuYXdheWQzdmlsJyB9XHJcbiAgICBdLFxyXG5cclxuXHJcblxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogWzIsIDRdLFxyXG4gICAgICBsYWJlbDogJ05lc3RhIHBcdTAwRTFnaW5hJ1xyXG4gICAgfSxcclxuXHJcbiAgICBsYXN0VXBkYXRlZDoge1xyXG4gICAgICB0ZXh0OiAnXHUwMERBbHRpbWEgYXR1YWxpemFcdTAwRTdcdTAwRTNvJywgLy8gbGVnZW5kYSBleGliaWRhXHJcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcclxuICAgICAgICBkYXRlU3R5bGU6ICdsb25nJyxcclxuICAgICAgICB0aW1lU3R5bGU6ICdzaG9ydCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBTaWRlYmFyIGVzcGVjXHUwMEVEZmljbyBwYXJhIGRpZmVyZW50ZXMgcm90YXNcclxuICAgIHNpZGViYXI6IHtcclxuICAgIH0sXHJcblxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6IGBGZWl0byBjb20gXHUyNzY0XHVGRTBGIHBhcmEgYSBjb211bmlkYWRlIHwgdiR7dmVyc2lvbn1gLFxyXG4gICAgICBjb3B5cmlnaHQ6ICcyMDI0LTIwMjYgXHUyMDIyIHJ1bmF3YXlkZXZpbCdcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtULFNBQVMsb0JBQW9CO0FBQy9VLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsaUJBQTZCO0FBQ3RD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QUFBLFFBQ2YscUJBQXFCO0FBQUE7QUFBQSxNQUN2QixDQUFDO0FBQUEsTUFDRCxVQUFVLFVBQVU7QUFBQSxNQUNwQixNQUFNO0FBQUEsUUFDSixVQUFVO0FBQUEsUUFDVixhQUFhO0FBQUEsTUFDZixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXO0FBQUEsVUFDVCxjQUFjO0FBQUEsWUFDWixRQUFRO0FBQUEsWUFDUixvQkFBb0IsQ0FBQyxPQUFPLFVBQVUsVUFBVTtBQUFBLFVBQ2xELENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFFSDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBRVgsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLGFBQVUsTUFBTSxJQUFJO0FBQUEsTUFDNUIsRUFBRSxNQUFNLFFBQVEsTUFBTSxTQUFTO0FBQUEsTUFDL0IsRUFBRSxNQUFNLGdDQUFzQixNQUFNLFdBQVc7QUFBQSxNQUMvQztBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLDBCQUFtQixNQUFNLHNCQUFzQjtBQUFBLFVBQ3ZELEVBQUUsTUFBTSxvQkFBYSxNQUFNLGtDQUFrQztBQUFBLFVBQzdELEVBQUUsTUFBTSx5QkFBa0IsTUFBTSw2QkFBNkI7QUFBQSxVQUM3RCxFQUFFLE1BQU0sb0JBQWEsTUFBTSxvQ0FBb0M7QUFBQSxRQUNqRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLGtDQUFrQztBQUFBLE1BQzFELEVBQUUsTUFBTSxXQUFXLE1BQU0sNkJBQTZCO0FBQUEsSUFDeEQ7QUFBQSxJQUlBLFNBQVM7QUFBQSxNQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFBQSxNQUNaLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUE7QUFBQSxNQUNOLGVBQWU7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFHQSxTQUFTLENBQ1Q7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLFNBQVMsK0NBQXFDLE9BQU87QUFBQSxNQUNyRCxXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
