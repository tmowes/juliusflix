import { ButtonHTMLAttributes } from 'react'

export type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  options?: string
}
