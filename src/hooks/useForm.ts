import { useCallback, useState } from 'react'
import { FormDataProps, FormProps } from './types'

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
