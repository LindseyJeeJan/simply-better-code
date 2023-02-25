import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Nav } from 'grommet';
import { Book } from 'grommet-icons';
import Tutorials from './pages/tutorials/Tutorials';

interface Tutorial {
  href: string;
  title: string;
}

const tutorialItems = Tutorials.map((tutorial: Tutorial) => (
  <li className='nav-list__item' key={uuid()}>
    <Link className='nav-list__link' to={tutorial.href}>
      <Book size='medium' />
      {tutorial.title}
    </Link>
  </li>
));

export default function NavLayout() {
  return (
    <Nav align='start' direction='row' gap='medium' justify='start'>
      <ul className='nav-list'>{tutorialItems}</ul>
    </Nav>
  );
}
