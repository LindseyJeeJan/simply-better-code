import React from 'react';
import uuid from 'react-uuid';
import { Nav } from 'grommet';
import { NavLink } from 'react-router-dom';

type NavLocation = {
  href: string;
  label: string;
};

const navLocations: NavLocation[] = [
  // {
  //   href: '/about',
  //   label: 'About',
  // },
];

const navItems =
  navLocations && navLocations.length
    ? navLocations.map((link) => (
        <NavLink
          color={'light'}
          key={uuid()}
          to={link.href}
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
        >
          {link.label}
        </NavLink>
      ))
    : [];

export default function MainNav() {
  return navLocations.length > 0 ? (
    <Nav
      className='main-nav'
      aria-label='main navigation'
      direction='row'
      gap='medium'
      align='center'
    >
      {navItems}
    </Nav>
  ) : (
    <></>
  );
}
