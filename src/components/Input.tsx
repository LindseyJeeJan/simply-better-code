import React from 'react';
import AlertMessage from './Alerts';

export interface Props {
  name: string;
  label: string;
  type: string;
  minLength?: number;
  error: boolean | undefined;
  errorMessage?: string | undefined;
  value?: string;
  onChange: any;
}

export default function Input({
  name,
  label,
  type,
  minLength,
  error,
  errorMessage,
  value,
  onChange,
}: Props) {
  return (
    <div className='input-group'>
      <label>
        <div className='margin-bottom-small'>{label}</div>
        {errorMessage && (
          <AlertMessage id={`error${name}`} message={errorMessage} alertType='error' />
        )}
        <input
          aria-describedby={`error${name}`}
          aria-invalid={error ? 'true' : false}
          autoComplete='off'
          className={error ? 'form-error' : ''}
          name={name}
          onChange={onChange}
          minLength={minLength}
          placeholder={`your ${name}`}
          required
          type={type}
          value={value}
        />
      </label>
    </div>
  );
}
