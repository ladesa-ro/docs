<script setup lang="ts">
interface Props {
  href: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <a class="link-card border-2 rounded-md flex my-3" :href="props.href">
    <div class="flex flex-col p-4">
      <span class="title">{{ props.title }}</span>
      <span class="description">{{ props.description }}</span>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  @apply no-underline;
}
</style>
