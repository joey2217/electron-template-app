import { App } from 'vue'
import {
  ElCard,
  ElTabs,
  ElTabPane,
  ElSelect,
  ElOption,
  ElIcon
} from 'element-plus'

const components = [ElCard, ElTabs, ElTabPane, ElSelect, ElOption, ElIcon]
// const plugins = []

export default (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  // plugins.forEach((plugin) => {
  //   app.use(plugin)
  // })

  app.config.globalProperties.$ELEMENT = { size: 'small' }
}
