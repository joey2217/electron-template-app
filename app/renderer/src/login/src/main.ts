import { createApp } from 'vue'
import App from './App.vue'
import element from './plugins/element'
import './normalize.css'

createApp(App).use(element).mount('#app')
