import React from 'react';
import { Anchor, Nav } from 'grommet';
import uuid from 'react-uuid';

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
  <Anchor color={'light'} key={uuid()} href={link.href} className='nav-link' label={link.label} />
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
