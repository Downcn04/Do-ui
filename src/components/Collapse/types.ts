import type { InjectionKey, Ref } from 'vue'

export interface CollapseItem {
  name: nameType
  title: string
  disabled?: boolean
}
export interface CollapseProps {
  accordion?: boolean
}
export type nameType = string | number
// undefined可以取消
export interface CollapseContext {
  _openList: Ref<nameType[] >
  handleClick: (name: CollapseItem) => void
}
export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
