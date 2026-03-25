import { NavLink } from 'react-router-dom';
import NavBar from '../components/MainNav';

export default function MainHeader() {
  return (
    <header>
      <NavLink to='/' replace aria-label='home page' className='site-name'>
        simply better code
      </NavLink>
      <NavBar />
    </header>
  );
}
