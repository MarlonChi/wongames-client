import { InputHTMLAttributes } from 'react'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number | undefined
  isChecked?: boolean
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>
