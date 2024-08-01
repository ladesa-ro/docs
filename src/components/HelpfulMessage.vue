<script setup lang="ts">
import { ref } from "vue";

import { computed } from "vue";
import { getRandomMessage } from "../utils/GreatMessages";

const message = ref(getRandomMessage());

const content = computed(() => {
  const messageValue = message.value;
  return messageValue.content.replace(/([ \.]+)$/, "").trim();
});

const author = computed(() => {
  const messageValue = message.value;
  return messageValue.author?.trim() || "Autoria desconhecida";
});
</script>

<template>
  <div class="msg-block">
    <div>
      <p>
        <span>"</span>
        <span>{{ content }}</span>
        <span>"</span>
        <span> - {{ author }}.</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.msg-block {
  display: flex;

  text-align: justify;
}

.msg-block::before {
  content: "";
  display: block;

  align-self: stretch;

  width: 6px;
  background-color: var(--vp-c-text-1);

  flex-grow: 0;
  flex-shrink: 0;
}

.msg-block p {
  font-style: italic;
  font-family: "Times New Roman", Times, serif;

  font-size: 1rem;
  margin-left: 1rem;

  margin: 0.25rem 1rem;

  line-height: 1.3;
}
</style>
