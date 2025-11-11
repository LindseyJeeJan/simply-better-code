import React from 'react';
import { Anchor, Footer, Text } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';

export default function MainFooter() {
  return (
    <>
      <Footer pad='small' align='center' justify='between'>
        <div>
          <Anchor
            href='https://github.com/LindseyJeeJan'
            aria-label='Lindsey Lauria GitHub account'
          >
            <Github color='white' aria-hidden='true' />
          </Anchor>
          <Anchor
            href='https://www.linkedin.com/in/lindseyjjlauria/'
            aria-label='Lindsey Lauria LinkedIn account'
          >
            <Linkedin color='white' aria-hidden='true' />
          </Anchor>
        </div>
        <Text size='xsmall' className='copyright'>
          Copyright Lindsey Lauria &copy;2025
        </Text>
      </Footer>
    </>
  );
}
