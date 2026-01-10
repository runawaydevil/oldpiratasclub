// Interactivity Types
export interface UserRating {
  resourceId: string
  rating: number
  timestamp: Date
  userId?: string
}

export interface RatingData {
  resourceId: string
  averageRating: number
  totalRatings: number
  ratingDistribution: {
    1: number
    2: number
    3: number
    4: number
    5: number
  }
}

export interface UserPreferences {
  favoriteCategories: string[]
  favoriteTagsHistory: string[]
  hiddenTags: string[]
  searchHistory: string[]
  theme: 'dark' | 'light' | 'auto'
  language: string
  notifications: {
    newContent: boolean
    updates: boolean
    comments: boolean
  }
}

export interface LocalData {
  ratings: Record<string, UserRating>
  preferences: UserPreferences
  visitHistory: string[]
  bookmarks: string[]
  lastVisit: Date
}

export interface CommentData {
  id: string
  pageId: string
  content: string
  author: string
  timestamp: Date
  replies?: CommentData[]
  likes: number
  isModerated: boolean
}