import React from 'react';
import uuid from 'react-uuid';
import { Nav } from 'grommet';
import { NavLink } from 'react-router-dom';

const navLocations = [
  {
    href: '/about',
    label: 'About',
  },
];

const navItems = navLocations.map((link) => (
  <NavLink
    color={'light'}
    key={uuid()}
    to={link.href}
    replace
    className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
  >
    {link.label}
  </NavLink>
));

export default function MainNav() {
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
