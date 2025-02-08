export type ButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'info'
export type ButtonSize = 'small' | 'normal' | 'large'
export type ButtonNativeType = 'button' | 'submit' | 'reset'
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  disabled?: boolean
  circle?: boolean
  autoFocus?: boolean
  nativeType?: ButtonNativeType
  loading?: boolean
  icon?: string
}
export interface ButtonInstance {
  ref: HTMLButtonElement
}
