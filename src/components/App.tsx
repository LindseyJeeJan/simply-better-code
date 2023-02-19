import React from 'react';
import 'static/scss/main.scss';
import Container from 'components/Container';
import { Grommet, grommet } from 'grommet';

function App() {
  return (
    <Grommet theme={grommet}>
      <Container />
    </Grommet>
  );
}

export default App;
