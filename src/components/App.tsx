import React from 'react';
import 'static/scss/main.scss';
import Container from 'components/Container';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Montserrat',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Container />
    </Grommet>
  );
}

export default App;
