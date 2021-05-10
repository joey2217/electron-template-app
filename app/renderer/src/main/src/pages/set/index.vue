<template>
  <div>
    Set
    <router-link to="/set">Setting</router-link>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Set",
  setup(props, context) {
    return {};
  },
});
</script>

<style scoped>
</style>