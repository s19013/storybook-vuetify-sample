<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => {
  count.value++;
};
const reset = () => {
  count.value = 0;
};
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <v-btn @click="increment">Increment</v-btn>
    <v-btn @click="reset">Reset</v-btn>
  </div>
</template>
