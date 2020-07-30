export interface InputProps {
  hasValue?: boolean;
}

export interface FormFieldProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: 'text' | 'color';
}
