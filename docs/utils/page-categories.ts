// Page Categories and Metadata
export interface CategoryConfig {
  name: string
  displayName: string
  description: string
  icon: string
  color: string
  tags: string[]
}

export const CATEGORIES: Record<string, CategoryConfig> = {
  'fhmy': {
    name: 'fhmy',
    displayName: 'FHMY',
    description: 'Free Media Heck Yeah - A maior coleção de recursos gratuitos da internet',
    icon: '🌐',
    color: '#3B82F6',
    tags: ['recursos', 'gratuito', 'ferramentas', 'streaming', 'downloads']
  },
  'pirataria-thread': {
    name: 'pirataria-thread',
    displayName: 'Megathread Pirata',
    description: 'Recursos e guias da comunidade brasileira de pirataria',
    icon: '🏴‍☠️',
    color: '#EF4444',
    tags: ['pirataria', 'torrents', 'guias', 'comunidade', 'brasil']
  },
  'dbordo': {
    name: 'dbordo',
    displayName: 'Diário de Bordo',
    description: 'Conteúdo curado e organizado pelo Capitão',
    icon: '📖',
    color: '#10B981',
    tags: ['curado', 'organizado', 'qualidade', 'selecionado']
  },
  'blog': {
    name: 'blog',
    displayName: 'Blog',
    description: 'Posts, atualizações e notas técnicas',
    icon: '📝',
    color: '#8B5CF6',
    tags: ['posts', 'atualizações', 'notas', 'técnico']
  }
}

export const getCategory = (categoryName: string): CategoryConfig | null => {
  return CATEGORIES[categoryName] || null
}

export const getAllCategories = (): CategoryConfig[] => {
  return Object.values(CATEGORIES)
}

export const getCategoryByPath = (path: string): CategoryConfig | null => {
  if (path.includes('/fhmy/')) return CATEGORIES.fhmy
  if (path.includes('/pirataria-thread/')) return CATEGORIES['pirataria-thread']
  if (path.includes('/dbordo/')) return CATEGORIES.dbordo
  if (path.includes('/blog/')) return CATEGORIES.blog
  
  return null
}