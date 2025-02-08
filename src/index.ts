import type { App } from 'vue'
import Button from './components/Button'
import Collapse, { CollapseItem } from './components/Collapse'
import './styles/index.css'

const components = [Button, Collapse, CollapseItem]
function install(app: App) {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}
export {
  Button,
  Collapse,
  CollapseItem,
  install,
}
export default { install }
