import React from 'react'

import { WrapperFormField, Label, Input } from './styles'
import { FormFieldProps } from './types'

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  onChange,
  type,
  value,
}) => {
  const fieldId = `id_${name}`
  const isTextArea = type === 'search'
  const tag = isTextArea ? 'textarea' : 'input'
  const hasValue = Boolean(value.length)
  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          hasValue={hasValue}
        />
        <span>{label}</span>
      </Label>
    </WrapperFormField>
  )
}

export default FormField
