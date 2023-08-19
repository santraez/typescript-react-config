import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export type UserFormState = {
  name: string
  username: string
}

const InitialState: UserFormState = {
  name: "",
  username: ""
}

interface UserFormProps {
  handleSubmit: (user: UserFormState) => void
}

export default function UserForm({ handleSubmit }: UserFormProps) {
  const [form, setForm] = useState(InitialState)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormState

    setForm({ ...form, [name]: e.target.value })
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    handleSubmit(form);

    setForm(InitialState)
  }
  
  return (
    <>
      <Input
        name="name"
        value={form.name}
        placeholder="Nombre"
        handleChange={handleChange}
      />
      <Input
        name="username"
        value={form.username}
        placeholder="Usuario"
        handleChange={handleChange}
      />
      <Button handleClick={handleClick}>Enviar</Button>
    </>
  )
}