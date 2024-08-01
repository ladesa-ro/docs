<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

interface Props {
  href: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <a class="link-card border-2 rounded-md flex my-3" :href="props.href">
    <div class="flex flex-col gap-2">
      <span class="title">{{ props.title }}</span>

      <span class="description" v-if="props.description">{{ props.description }}</span>
    </div>

    <div class="icon">
      <ArrowRight />
    </div>
  </a>
</template>

<style scoped>
.link-card {
  position: relative;

  @apply no-underline;
  @apply grid grid-cols-[1fr,_auto];

  display: grid;
  grid-template-columns: 1fr auto;

  padding: 1rem;

  gap: 0.5rem;
  border: 1px solid var(--sl-color-gray-5);
  border-radius: 0.5rem;

  box-shadow: var(--sl-shadow-sm);
}

.link-card {
  color: var(--vp-c-text-2);
}

.link-card .title {
  color: var(--vp-c-text-1);
}

.link-card:hover {
  background: var(--sl-color-gray-7, var(--sl-color-gray-6));
  border-color: var(--sl-color-gray-2);

  color: var(--vp-c-text-2);
}

.link-card .icon {
  color: var(--vp-c-text-2);
}

.link-card:hover .icon {
  color: var(--vp-c-text-1);
}
</style>
