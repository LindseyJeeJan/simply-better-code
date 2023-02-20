import React from 'react';
import 'static/scss/main.scss';
import Container from 'components/Container';
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const customFocus = deepMerge(grommet, {
  global: {
    colors: {
      focus: '#3f51b5',
    },
  },
});

export default function App() {
  return (
    <Grommet theme={customFocus}>
      <Container />
    </Grommet>
  );
}
