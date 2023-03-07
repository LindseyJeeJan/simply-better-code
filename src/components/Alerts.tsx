import React, { JSXElementConstructor, ReactElement, ReactFragment } from 'react';
import { Alert, CircleInformation } from 'grommet-icons';

export interface Props {
  alertType?: string;
  id?: string;
  message?: string;
}

export default function AlertMessage({ message, id = '', alertType = 'error' }: Props) {
  return (
    <p
      className={'alert-message' + alertType === 'error' ? 'message-error' : ''}
      id={id}
      role='alert'
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
