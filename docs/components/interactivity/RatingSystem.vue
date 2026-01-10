<template>
  <div class="rating-system">
    <div class="rating-header">
      <span class="rating-icon">⭐</span>
      <span class="rating-label">Avaliação</span>
    </div>
    
    <div class="rating-stars">
      <button
        v-for="star in 5"
        :key="star"
        :class="['star', { active: star <= currentRating }]"
        @click="setRating(star)"
      >
        ★
      </button>
    </div>
    
    <div v-if="showCount" class="rating-count">
      {{ ratingCount }} avaliações
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  resourceId: string
  showCount?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCount: true,
  readonly: false
})

const currentRating = ref(0)
const ratingCount = ref(0)

const setRating = (rating: number) => {
  if (!props.readonly) {
    currentRating.value = rating
  }
}
</script>

<style scoped>
.rating-system {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  margin: 1rem 0;
}

.star {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
}

.star.active {
  color: #ffd700;
}
</style>