import React from 'react';
import { Anchor, Footer, Text } from 'grommet';

export default function MainFooter() {
  return (
    <>
      <Footer pad='small' align='center' justify='end'>
        <Anchor href='https://github.com/LindseyJeeJan'>GitHub</Anchor>
        <Anchor href='https://www.linkedin.com/in/lindseyjjlauria/'>LinkedIn</Anchor>
        <Text size='small' className='copyright'>
          Copyright &copy;2023 Lindsey Lauria.
        </Text>
      </Footer>
    </>
  );
}
