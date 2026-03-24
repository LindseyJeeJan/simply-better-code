import { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  useEffect(() => {
    document.title = 'Error – Simply Better Code';
  }, []);

  return (
    <div className='app-main'>
      <main id='error-page'>
        <h1>Error</h1>
        <p>We&apos;re sorry, an unexpected error has occurred.</p>
        <p>{error?.statusText || error?.message}</p>
        <p>
          Return to the <Link to='/'>homepage</Link>.
        </p>
      </main>
    </div>
  );
}
