import React from 'react'
import InputField from '../InputField/InputField';
import useFormFields from '../../../hooks/useFormFields';

const UserForm = () => {
    const {name, email, setName, setEmail} = useFormFields();

const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
}

  return (
    <form onSubmit={handleSubmit}>
        <InputField label='name' type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
        <InputField label='email' type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
    </form>
  )
}


export default UserForm
