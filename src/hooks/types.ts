/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormProps {
  values: FormDataProps
  handleChange: (event: any) => void
  clearForm: (initialvalues: FormDataProps) => void
}

export interface CategoryProps {
  id?: number
  categoryTitle?: string
  description?: string
  color?: string
}

export interface VideoProps {
  id?: number
  categoryId?: number
  category?: string
  videoTitle?: string
  url?: string
}

export type FormDataProps = CategoryProps & VideoProps
