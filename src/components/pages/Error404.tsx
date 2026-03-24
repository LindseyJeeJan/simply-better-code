import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Error404Page() {
  useEffect(() => {
    document.title = 'Error 404 Page Not Found – Simply Better Code';
  }, []);

  return (
    <main id='error-page'>
      <h1>404 Page Not Found</h1>
      <p>The page you&apos;re looking for does not exist.</p>
      <p>
        Please check the URL and try again, or return to the <Link to='/'>homepage</Link>.
      </p>
    </main>
  );
}
