<template>
   <h1>Main</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
@media (prefers-color-scheme: dark) {
  body { background:  #000; color: #fff; }
}

@media (prefers-color-scheme: light) {
  body { background:  #fff; color: #000; }
}
</style>
