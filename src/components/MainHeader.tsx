import React from 'react';
import { Avatar, Header } from 'grommet';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/MainNav';
const gravatarSrc = 'https://www.gravatar.com/avatar/9b893deb3209a60d70152ac63517589c';

export default function MainHeader() {
  return (
    <>
      <Header pad='small' align='center' justify='between'>
        <NavLink color={'light'} to='/' replace aria-label='home page'>
          <Avatar src={gravatarSrc} aria-hidden='true' />
        </NavLink>
        <NavBar />
      </Header>
    </>
  );
}
