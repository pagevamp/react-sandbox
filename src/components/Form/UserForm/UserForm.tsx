import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import useFormFields from '../../../hooks/useFormFields';
import Button from '../../Button/Button';
import styles from './style.module.css'; 

const UserForm = () => {
  const { name, email, setName, setEmail } = useFormFields();
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(name);
    setName('');
    setEmail('');
  };

  return (
    <div className={styles['user-form']}>
      <form className={styles['user-form__form']} onSubmit={handleSubmit}>
        <InputField label='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <InputField label='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button value="Submit" className={styles['user-form__button']} />
      </form>

      {submittedName && (
        <p className={styles['user-form__welcome']}>
          Welcome, {submittedName}!
        </p>
      )}
    </div>
  );
};

export default UserForm;
