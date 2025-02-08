import type { App } from 'vue'
import Button from './Button.vue'

Button.install = (app: App) => {
  // 断言类型需要修改
  app.component(Button.name as string, Button)
}
export default Button
export * from './types'
