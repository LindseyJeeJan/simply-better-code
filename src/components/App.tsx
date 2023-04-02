import React from 'react';
import '../static/scss/main.scss';
import Container from '../components/Container';
import { Grommet } from 'grommet';

export default function App() {
  return (
    <Grommet className='app-main'>
      <Container />
    </Grommet>
  );
}
