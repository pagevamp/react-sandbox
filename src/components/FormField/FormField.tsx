import React from "react"

interface FormFieldInterface {
  placeholder: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  labelName?: string | null
  className?: string
  value?: string
}
const FormField = ({
  placeholder,
  onChange,
  labelName,
  value,
  className,
}: FormFieldInterface) => {
  return (
    <>
      <div className={className}>
        <label>
          {labelName}
          <input placeholder={placeholder} onChange={onChange} value={value} />
        </label>
      </div>
    </>
  )
}

export default FormField
