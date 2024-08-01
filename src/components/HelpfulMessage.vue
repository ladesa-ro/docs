<script setup lang="ts">
import { ref } from "vue";

import { getRandomMessage } from "../utils/GreatMessages";

const message = ref(getRandomMessage());
</script>

<template>
  <div class="msg-block">
    <div>
      <p>
        <span>"</span>
        <span>{{ message.content }}</span>
        <span>".</span>
        <br />
        <span class="block mt-0.5">- {{ message.author || "Autoria desconhecida" }}.</span>
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
