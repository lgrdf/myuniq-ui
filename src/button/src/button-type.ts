import type { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text'
export type IButtonSIze = 'small' | 'medium' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>, //字符串且类型之一
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSIze>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps> //抽取类型
