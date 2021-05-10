import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

createApp(App)
.use(router)
.mount('#app')

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
