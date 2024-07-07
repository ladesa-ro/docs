<script setup lang="ts">
interface Props {
  href: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <a class="link-card" :href="props.href">
    <span class="title">{{ props.title }}</span>
    <span class="description">{{ props.description }}</span>
  </a>
</template>
