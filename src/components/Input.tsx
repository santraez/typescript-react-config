import { ChangeEventHandler } from "react"

interface InputProps {
  placeholder: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  name: string
  value: string
}

export default function Input({ placeholder, handleChange, name, value }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
