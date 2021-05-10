<template>
  <div>Home</div>
  <router-link to="/set">Setting</router-link>
  <router-link to="/">Home</router-link>
  <div>
    <button @click="onOpenSetWin">
      open set window
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const { ipcRenderer } = window.require("electron");


export default defineComponent({
  name: "Home",
  setup(props, context) {
    const onOpenSetWin =()=>{
      ipcRenderer.invoke("open-set-window");
    }
    return {
      onOpenSetWin
    };
  },
});
</script>

<style scoped>
</style>