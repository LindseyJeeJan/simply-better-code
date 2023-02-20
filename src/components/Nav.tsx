import React from 'react';
import { Anchor, Nav } from 'grommet';

export default function NavBar() {
  return (
    <Nav direction='row' gap='medium' align='center'>
      <Anchor color={'light'} href='/' className='nav__link' label='Home' />
      <Anchor color={'light'} href='/about' className='nav__link' label='About' />
    </Nav>
  );
}
