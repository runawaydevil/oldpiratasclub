<template>
  <div class="tags-page">
    <div class="tags-header">
      <h1>🏷️ Tags & Categorias</h1>
      <p>Explore o conteúdo por tags e categorias</p>
    </div>
    
    <div class="tags-grid">
      <div
        v-for="tag in popularTags"
        :key="tag.name"
        class="tag-card"
      >
        <h3>{{ tag.name }}</h3>
        <span class="tag-count">{{ tag.count }} recursos</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const popularTags = ref([
  { name: 'streaming', count: 45 },
  { name: 'privacy', count: 40 },
  { name: 'torrents', count: 35 }
])
</script>

<style scoped>
.tags-page {
  padding: 2rem;
}

.tag-card {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>