import React from 'react';
import 'static/scss/main.scss';
import Container from 'components/Container';
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

export default function App() {
  return (
    <Grommet>
      <Container />
    </Grommet>
  );
}
