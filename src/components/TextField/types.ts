import { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'right' | 'left'
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>
