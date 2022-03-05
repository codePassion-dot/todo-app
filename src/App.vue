<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from "vue";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const message = ref("Hola mundo");
</script>

<template>
  <h1 class="mx-auto my-10 w-fit text-3xl font-bold underline">
    {{ message.toLowerCase() }}
  </h1>
</template>
