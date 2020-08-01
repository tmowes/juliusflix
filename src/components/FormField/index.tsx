import React from 'react'

import { WrapperFormField, Label, Input } from './styles'
import { FormFieldProps } from './types'

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  onChange,
  type,
  value,
  suggestions,
}) => {
  const fieldId = `id_${name}`
  const isTextArea = type === 'search'
  const tag = isTextArea ? 'textarea' : 'input'
  const hasValue = Boolean(value?.length)
  const hasSuggestions = Boolean(suggestions?.length)
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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <span>{label}</span>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions?.map(suggestion => (
              <option key={suggestion} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </WrapperFormField>
  )
}

export default FormField
