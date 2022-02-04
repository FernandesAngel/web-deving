import { Control } from 'react-hook-form'
export interface ItemCheckboxProps {
  value: string
  label: string
}
export interface GroupCheckboxProps {
  items: ItemCheckboxProps[]
  name: string
  defaultValue?: string | number
  control: Control<any>
  error: string
}
