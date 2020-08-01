/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'

interface FormProps {
  values: FormDataProps
  handleChange: (event: any) => void
  clearForm: (initialvalues: FormDataProps) => void
}

interface FormDataProps {
  id: number
  categoryTitle: string
  description: string
  color: string
}

export function useForm(initialvalues: FormDataProps): FormProps {
  const [values, setValues] = useState<FormDataProps>(initialvalues)

  const setValue = useCallback(
    (key, value) => {
      setValues({
        ...values,
        [key]: value,
      })
    },
    [values],
  )

  const handleChange = useCallback(
    event => {
      setValue(event.target.getAttribute('name'), event.target.value)
    },
    [setValue],
  )

  const clearForm = useCallback(() => {
    setValues(initialvalues)
  }, [initialvalues])

  return { values, handleChange, clearForm }
}
