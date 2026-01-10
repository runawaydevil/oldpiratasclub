// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './clean-theme.css'  // TEMA LIMPO E FUNCIONAL

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router }) {
    // Configuração limpa - deixar o CSS fazer o trabalho
    if (typeof window !== 'undefined') {
      // Sistema de fallback para favicon
      const ensureFavicon = () => {
        const faviconPaths = [
          '/favico.ico',
          '/icon.png',
          '/favicon.ico',
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏴‍☠️</text></svg>'
        ]
        
        let currentFavicon = document.querySelector('link[rel="icon"]')
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
      
      // Aguardar o DOM estar pronto
      const updateFooter = () => {
        const copyright = document.querySelector('.VPFooter .copyright')
        if (copyright && copyright.textContent.includes('runawaydevil')) {
          copyright.innerHTML = 'Copyright © 2023-2026 <a href="https://github.com/runawaydevil" target="_blank" rel="noopener noreferrer">runawaydevil</a>'
        }
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
                  sunIcon.style.display = 'none'
                  moonIcon.style.display = 'block'
                } else {
                  sunIcon.style.display = 'block'
                  moonIcon.style.display = 'none'
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
        const hamburger = document.querySelector('.VPNavBarHamburger')
        const navScreen = document.querySelector('.VPNavScreen')
        
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
            if (!hamburger.contains(e.target) && !navScreen.contains(e.target)) {
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
      updateFooter()
      ensureThemeSwitcher()
      ensureMobileMenu()
      router.onAfterRouteChanged = () => {
        ensureFavicon()
        updateFooter()
        ensureThemeSwitcher()
        ensureMobileMenu()
      }
    }
  }
}