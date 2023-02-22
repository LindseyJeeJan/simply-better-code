import React from 'react';
import { Anchor, Nav } from 'grommet';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

const navLocations = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },
];

const navItems = navLocations.map((link) => (
  <Link color={'light'} key={uuid()} to={link.href} className='nav-link'>
    {link.label}
  </Link>
));

export default function NavBar() {
  return (
    <Nav
      className='main-nav'
      aria-label='main navigation'
      direction='row'
      gap='medium'
      align='center'
    >
      {navItems}
    </Nav>
  );
}
