// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './clean-theme.css'  // TEMA LIMPO E FUNCIONAL

// Import custom components
import RelatedResources from '../../components/content-discovery/RelatedResources.vue'
import TagsPage from '../../components/content-discovery/TagsPage.vue'

import FilterControls from '../../components/content-discovery/FilterControls.vue'
import RatingSystem from '../../components/interactivity/RatingSystem.vue'
import CommentsSystem from '../../components/interactivity/CommentsSystem.vue'

import { PageMetadataExtractor } from '../../utils/page-metadata'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => {
        // Only show components on appropriate pages
        if (typeof window === 'undefined') return null
        
        const pageData = PageMetadataExtractor.extractFromDOM()
        
        if (!PageMetadataExtractor.shouldShowRelatedResources(pageData)) {
          return null
        }
        
        // Create container for multiple components
        return h('div', { class: 'page-enhancements' }, [
          // Rating System
          h(RatingSystem, {
            resourceId: pageData.url,
            showCount: true,
            readonly: false
          }),
          
          // Related Resources
          h(RelatedResources, {
            currentPage: pageData,
            maxResults: 5,
            algorithm: 'hybrid'
          }),
          
          // Comments System
          h(CommentsSystem, {
            pageId: pageData.url,
            provider: 'giscus',
            moderationEnabled: false
          })
        ])
      }
    })
  },
  enhanceApp({ app, router }) {
    // Register global components
    app.component('RelatedResources', RelatedResources)
    app.component('TagsPage', TagsPage)
    app.component('FilterControls', FilterControls)
    app.component('RatingSystem', RatingSystem)
    app.component('CommentsSystem', CommentsSystem)

    // Sistema de fallback para favicon
    if (typeof window !== 'undefined') {
      const ensureFavicon = () => {
        const faviconPaths = [
          '/favico.ico',
          '/icon.png',
          '/favicon.ico',
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏴‍☠️</text></svg>'
        ]
        
        let currentFavicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
        if (!currentFavicon) {
          currentFavicon = document.createElement('link')
          currentFavicon.rel = 'icon'
          document.head.appendChild(currentFavicon)
        }
        
        const testFavicon = (index = 0) => {
          if (index >= faviconPaths.length) return
          
          const path = faviconPaths[index]
          if (path.startsWith('data:')) {
            currentFavicon.href = path
            return
          }
          
          const img = new Image()
          img.onload = () => {
            currentFavicon.href = path
          }
          img.onerror = () => {
            testFavicon(index + 1)
          }
          img.src = path
        }
        
        testFavicon()
      }
      
      // Sistema para garantir funcionamento do theme switcher e persistência
      const ensureThemeSwitcher = () => {
        const switcher = document.querySelector('.VPSwitchAppearance')
        if (switcher) {
          // Garantir que o switcher tenha os event listeners corretos
          switcher.addEventListener('click', () => {
            setTimeout(() => {
              // Forçar atualização do ícone após mudança de tema
              const isDark = document.documentElement.classList.contains('dark')
              const sunIcon = switcher.querySelector('.sun')
              const moonIcon = switcher.querySelector('.moon')
              
              if (sunIcon && moonIcon) {
                if (isDark) {
                  (sunIcon as HTMLElement).style.display = 'none';
                  (moonIcon as HTMLElement).style.display = 'block'
                } else {
                  (sunIcon as HTMLElement).style.display = 'block';
                  (moonIcon as HTMLElement).style.display = 'none'
                }
              }
              
              // Garantir persistência do tema
              try {
                localStorage.setItem('vitepress-theme-appearance', isDark ? 'dark' : 'light')
              } catch (e) {
                console.warn('Não foi possível salvar preferência de tema:', e)
              }
              
              // Verificação específica para mobile
              if (window.innerWidth <= 768) {
                // Forçar re-render dos estilos mobile
                document.body.style.display = 'none'
                document.body.offsetHeight // trigger reflow
                document.body.style.display = ''
              }
            }, 100)
          })
        }
      }
      
      // Sistema para restaurar tema salvo
      const restoreTheme = () => {
        try {
          const savedTheme = localStorage.getItem('vitepress-theme-appearance')
          if (savedTheme) {
            const isDark = savedTheme === 'dark'
            const currentIsDark = document.documentElement.classList.contains('dark')
            
            if (isDark !== currentIsDark) {
              document.documentElement.classList.toggle('dark', isDark)
            }
          }
        } catch (e) {
          console.warn('Não foi possível restaurar tema salvo:', e)
        }
      }
      
      // Sistema para garantir funcionamento do menu mobile
      const ensureMobileMenu = () => {
        const hamburger = document.querySelector('.VPNavBarHamburger') as HTMLElement
        const navScreen = document.querySelector('.VPNavScreen') as HTMLElement
        
        if (hamburger && navScreen) {
          // Garantir que o menu mobile funcione corretamente
          hamburger.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            
            const isOpen = navScreen.style.display === 'block' || navScreen.classList.contains('open')
            
            if (isOpen) {
              navScreen.style.display = 'none'
              navScreen.classList.remove('open')
              document.body.style.overflow = ''
            } else {
              navScreen.style.display = 'block'
              navScreen.classList.add('open')
              document.body.style.overflow = 'hidden'
            }
          })
          
          // Fechar menu ao clicar em um link
          const menuLinks = navScreen.querySelectorAll('a')
          menuLinks.forEach(link => {
            link.addEventListener('click', () => {
              navScreen.style.display = 'none'
              navScreen.classList.remove('open')
              document.body.style.overflow = ''
            })
          })
          
          // Fechar menu ao clicar fora
          document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement
            if (!hamburger.contains(target) && !navScreen.contains(target)) {
              navScreen.style.display = 'none'
              navScreen.classList.remove('open')
              document.body.style.overflow = ''
            }
          })
        }
      }
      
      // Executar imediatamente e também após mudanças de rota
      restoreTheme()
      ensureFavicon()
      ensureThemeSwitcher()
      ensureMobileMenu()
      if (router) {
        router.onAfterRouteChanged = () => {
          ensureFavicon()
          ensureThemeSwitcher()
          ensureMobileMenu()
        }
      }
    }
  }
} satisfies Theme
