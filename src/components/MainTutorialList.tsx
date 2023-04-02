import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Nav } from 'grommet';
import { Book } from 'grommet-icons';

import Tutorials from '@/components/pages/tutorials/TutorialsData';

interface Tutorial {
  href: string;
  title: string;
}

const tutorialItems = Tutorials.map((tutorial: Tutorial) => (
  <li className='nav-list__item' key={uuid()}>
    <Link className='nav-list__link' to={tutorial.href}>
      <Book color='plain' size='medium' /> {tutorial.title}
    </Link>
  </li>
));

export default function MainTutorialList() {
  return (
    <Nav align='start' direction='row' gap='medium' justify='start'>
      <ul className='nav-list'>{tutorialItems}</ul>
    </Nav>
  );
}
