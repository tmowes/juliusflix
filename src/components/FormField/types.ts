import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasValue?: boolean
  as: 'textarea' | 'input'
}

export interface FormFieldProps {
  label: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string | undefined
  name: string
  type: 'text' | 'color' | 'search'
  suggestions?: (string | undefined)[]
}
