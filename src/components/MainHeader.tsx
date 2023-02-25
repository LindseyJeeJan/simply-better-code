import React from 'react';
import { Avatar, Header } from 'grommet';
import NavBar from 'components/MainNav';
const gravatarSrc = 'https://www.gravatar.com/avatar/9b893deb3209a60d70152ac63517589c';

export default function MainHeader() {
  return (
    <>
      <Header pad='small' align='center' justify='between'>
        <Avatar src={gravatarSrc} />
        <NavBar />
      </Header>
    </>
  );
}
