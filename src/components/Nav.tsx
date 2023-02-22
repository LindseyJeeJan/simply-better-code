import React from 'react';
import uuid from 'react-uuid';
import { Nav } from 'grommet';
import { NavLink } from 'react-router-dom';

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
  <NavLink
    color={'light'}
    key={uuid()}
    to={link.href}
    className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
  >
    {link.label}
  </NavLink>
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
