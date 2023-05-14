import React from 'react';

export interface Props {
  label: string;
  onChange: any;
}

export default function Checkbox({ label, onChange }: Props) {
  return (
    <div className='checkbox'>
      <label>
        <input name={label} onChange={onChange} type='checkbox' value={label} />
        {label}
      </label>
    </div>
  );
}
