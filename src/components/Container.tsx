import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import { Outlet } from 'react-router-dom';

export default function Container() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
