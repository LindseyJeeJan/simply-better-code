import React from 'react';
import { Alert, CircleInformation } from 'grommet-icons';

export interface Props {
  alertType?: string;
  id?: string;
  message?: string;
}

export default function AlertMessage({ message, id = '', alertType = 'error' }: Props) {
  return (
    <p
      className={alertType === 'error' ? 'alert-message message-error' : 'alert-message '}
      id={id}
      role={alertType === 'error' ? 'alert' : ''}
      style={{ display: message ? 'block' : 'none' }}
    >
      {alertType == 'error' ? (
        <Alert color='#CC0000' size='medium' aria-hidden='true' />
      ) : (
        <CircleInformation color='cornflowerblue' size='medium' aria-hidden='true' />
      )}
      {message}
    </p>
  );
}
