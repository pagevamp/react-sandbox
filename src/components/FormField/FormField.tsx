import React from "react"
import { useForm } from "react-hook-form"

interface FormFieldInterface {
  placeholder: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
  labelName?: string | null
  className?: string
  name: string
}
const FormField = ({
  placeholder,
  onSubmit,
  labelName,
  className,
  name,
}: FormFieldInterface) => {
  const { register } = useForm()
  return (
    <>
      <form onSubmit={onSubmit} className={className}>
        <label>
          {labelName}
          <input placeholder={placeholder} {...register(`${name}`)} />
        </label>
      </form>
    </>
  )
}

export default FormField
