import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

export interface IconProps extends FontAwesomeIconProps {
  type?: 'primary' | 'danger' | 'success' | 'warning' | 'info'
  color?: string
}
