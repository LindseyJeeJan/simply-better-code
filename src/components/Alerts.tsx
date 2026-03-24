export interface Props {
  alertType?: string;
  id?: string;
  message?: string;
}

export default function AlertMessage({ message, id = '', alertType = 'error' }: Props) {
  return (
    <p
      className={alertType === 'error' ? 'alert-message message-error' : 'alert-message'}
      id={id}
      role={alertType === 'error' ? 'alert' : ''}
      style={{ display: message ? 'block' : 'none' }}
    >
      {message}
    </p>
  );
}
