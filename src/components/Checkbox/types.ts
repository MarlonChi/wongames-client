import { InputHTMLAttributes } from 'react'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>
