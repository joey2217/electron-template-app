<template>
  <div>
    <el-card class="card">
      <template #header>
        <h3>设置</h3>
        <span>{{theme}}</span>
      </template>
      <el-tabs tab-position="left" style="height: 200px">
        <el-tab-pane label="dark mode">
          <el-select v-model="darkMode" @change="onChange">
            <el-option
              v-for="option in options"
              :key="option"
              :label="option"
              :value="option"
            />
          </el-select>
        </el-tab-pane>
        <el-tab-pane label="other">other</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
const { ipcRenderer } = window.require("electron");
type Theme = "dark" | "light" | "system";

export default defineComponent({
  name: "App",
  setup() {
    const darkMode = ref("system");
    const theme = ref("");
    const onChange = (val: Theme) => {
      ipcRenderer.invoke("dark-mode:toggle", val);
    };
    ipcRenderer.on("current-theme", (e, theme) => {
      darkMode.value = theme;
      theme.value = theme;
    });
    return {
      darkMode,
      theme,
      options: ["dark", "light", "system"],
      onChange,
    };
  },
});
</script>

<style>
.card {
  max-width: 500px;
}
@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}

@media (prefers-color-scheme: light) {
  body {
    background: white;
    color: black;
  }
}
</style>
