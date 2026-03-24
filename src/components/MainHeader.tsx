import { NavLink } from 'react-router-dom';
import NavBar from '../components/MainNav';

export default function MainHeader() {
  return (
    <header>
      <NavLink to='/' replace aria-label='home page'>
        Simply Better Code
      </NavLink>
      <NavBar />
    </header>
  );
}
