<template>
  <div class="comments-system">
    <div class="comments-header">
      <h3>💬 Comentários</h3>
    </div>
    
    <div class="comments-placeholder">
      <p>Sistema de comentários será implementado em breve.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pageId: string
  provider?: string
  moderationEnabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  provider: 'giscus',
  moderationEnabled: false
})
</script>

<style scoped>
.comments-system {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.comments-placeholder {
  text-align: center;
  color: var(--vp-c-text-2);
  font-style: italic;
}
</style>