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
    <span class="stack">
      <span class="title">{{ props.title }}</span>
      <span class="description">{{ props.description }}</span>
    </span>

    <!-- <Icon name="right-arrow" size="1.333em" class="icon rtl:flip" /> -->
  </a>
</template>

<style lang="css" scoped>
.link-card {
  display: grid;

  grid-template-columns: 1fr auto;

  gap: 0.5rem;

  border: 1px solid var(--sl-color-gray-5);

  border-radius: 0.5rem;

  padding: 1rem;

  box-shadow: var(--sl-shadow-sm);

  position: relative;
}

a {
  text-decoration: none;
  line-height: var(--sl-line-height-headings);
}

/* a11y fix for https://github.com/withastro/starlight/issues/487 */

a::before {
  content: "";

  position: absolute;

  inset: 0;
}

.stack {
  display: flex;
  
  flex-direction: column;

  gap: 0.5rem;
}

.title {
  color: var(--sl-color-white);

  font-weight: 600;

  font-size: var(--sl-text-lg);
}

.description {
  color: var(--sl-color-gray-3);

  line-height: 1.5;
}

.icon {
  color: var(--sl-color-gray-3);
}

/* Hover state */

.link-card:hover {
  background: var(--sl-color-gray-7, var(--sl-color-gray-6));

  border-color: var(--sl-color-gray-2);
}

.link-card:hover .icon {
  color: var(--sl-color-white);
}
</style>
