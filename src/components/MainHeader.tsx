import React from 'react';
import { Header } from 'grommet';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/MainNav';

export default function MainHeader() {
  return (
    <>
      <Header pad='medium' align='center' justify='between'>
        <NavLink color={'white'} to='/' replace aria-label='home page'>
          Simply Better Code
        </NavLink>
        <NavBar />
      </Header>
    </>
  );
}
