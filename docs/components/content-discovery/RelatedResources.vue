<template>
  <div v-if="relatedResources.length > 0" class="related-resources">
    <h3 class="related-title">
      <span class="related-icon">🔗</span>
      Recursos Relacionados
    </h3>
    
    <div class="related-grid">
      <div
        v-for="resource in relatedResources"
        :key="resource.page.url"
        class="related-item"
      >
        <a :href="resource.page.url" class="related-link">
          <div class="related-content">
            <h4 class="related-item-title">{{ resource.page.title }}</h4>
            <p v-if="resource.page.excerpt" class="related-excerpt">
              {{ resource.page.excerpt }}
            </p>
            <div class="related-meta">
              <span class="related-category">{{ resource.page.category }}</span>
              <span class="related-score">{{ Math.round(resource.score * 100) }}% similar</span>
            </div>
            <div v-if="resource.reasons.length > 0" class="related-reasons">
              <span
                v-for="reason in resource.reasons.slice(0, 2)"
                :key="reason"
                class="reason-tag"
              >
                {{ reason }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PageData } from './types'

interface Props {
  currentPage: PageData
  maxResults?: number
  algorithm?: 'tags' | 'category' | 'hybrid'
}

const props = withDefaults(defineProps<Props>(), {
  maxResults: 5,
  algorithm: 'hybrid'
})

const relatedResources = ref<any[]>([])

onMounted(() => {
  // Mock data for now - in real implementation, this would use the similarity engine
  relatedResources.value = [
    {
      page: {
        title: 'Guia Autobrr',
        url: '/dbordo/pirataria-thread/autobrr',
        excerpt: 'Automatize downloads e melhore seu ratio',
        category: 'pirataria-thread'
      },
      score: 0.85,
      reasons: ['Tags em comum: automation, torrents']
    },
    {
      page: {
        title: 'Streaming com Stremio',
        url: '/dbordo/pirataria-thread/stremio',
        excerpt: 'Guia completo para usar o Stremio',
        category: 'pirataria-thread'
      },
      score: 0.72,
      reasons: ['Mesma categoria: pirataria-thread']
    }
  ]
})
</script>

<style scoped>
.related-resources {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.related-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.related-icon {
  font-size: 1.1rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.related-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.related-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.related-link {
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
}

.related-item-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.related-excerpt {
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.related-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.related-category {
  background: rgba(59, 130, 246, 0.2);
  color: #60A5FA;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.related-score {
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.related-reasons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.reason-tag {
  background: rgba(16, 185, 129, 0.2);
  color: #34D399;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .related-resources {
    padding: 1rem;
  }
}
</style>