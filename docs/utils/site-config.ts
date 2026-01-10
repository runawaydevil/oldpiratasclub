// Site Configuration
export const SITE_CONFIG = {
  name: 'piratas.club',
  title: '#hacking',
  description: 'Vault de Recursos Digitais - O maior compêndio digital do mundo e em português',
  baseUrl: 'https://piratas.club',
  
  // Navigation structure
  navigation: {
    main: [
      { text: 'Início', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: '📖 Diário de Bordo', link: '/dbordo/' }
    ],
    
    social: [
      { text: '🌐 Site Pessoal', link: 'https://pablo.space' },
      { text: '🐙 GitHub', link: 'https://github.com/runawaydevil' },
      { text: '🐦 Twitter (X)', link: 'https://x.com/runawayd3vil' },
      { text: '🧠 Reddit', link: 'https://reddit.com/u/runawaydevil' }
    ]
  },
  
  // Content structure
  sections: {
    fhmy: {
      name: 'FHMY',
      fullName: 'Free Media Heck Yeah',
      description: 'A maior coleção de recursos gratuitos da internet',
      path: '/dbordo/fhmy/',
      icon: '🌐',
      color: '#3B82F6'
    },
    
    piratariaThread: {
      name: 'Megathread Pirata',
      fullName: 'Megathread Pirata',
      description: 'Recursos e guias da comunidade brasileira de pirataria',
      path: '/dbordo/pirataria-thread/',
      icon: '🏴‍☠️',
      color: '#EF4444'
    },
    
    dbordo: {
      name: 'Diário de Bordo',
      fullName: 'Diário de Bordo',
      description: 'Conteúdo curado e organizado pelo Capitão',
      path: '/dbordo/',
      icon: '📖',
      color: '#10B981'
    },
    
    blog: {
      name: 'Blog',
      fullName: 'Blog',
      description: 'Posts, atualizações e notas técnicas',
      path: '/blog/',
      icon: '📝',
      color: '#8B5CF6'
    }
  },
  
  // Statistics
  stats: {
    totalPages: '180+',
    totalLinks: '2000+',
    sections: 2,
    language: 'pt-BR',
    version: '1.0.0'
  },
  
  // Author info
  author: {
    name: 'runawaydevil',
    realName: 'Pablo Murad',
    email: 'pablomurad@pm.me',
    website: 'https://pablo.space',
    github: 'https://github.com/runawaydevil',
    twitter: 'https://x.com/runawayd3vil',
    reddit: 'https://reddit.com/u/runawaydevil'
  }
}

export default SITE_CONFIG