import { ButtonHTMLAttributes } from 'react'

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  checked: boolean
}
