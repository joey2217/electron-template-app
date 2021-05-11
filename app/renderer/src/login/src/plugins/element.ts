import { App } from 'vue'
import {
  ElMessageBox,
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElIcon,
  ElCard
} from 'element-plus'

const components = [ElButton, ElInput, ElForm, ElFormItem, ElCard, ElIcon]
const plugins = [ElMessageBox]

export default (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })

  app.config.globalProperties.$ELEMENT = { size: 'small' }
}
