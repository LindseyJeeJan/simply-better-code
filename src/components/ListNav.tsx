import React from 'react';
import uuid from 'react-uuid';
import { Routes, Route } from 'react-router-dom';
import { Anchor, Nav } from 'grommet';
import { Book } from 'grommet-icons';
import ErrorPage from './pages/Error';
import Tutorials from './pages/tutorials/Tutorials';

interface Tutorial {
  href: string;
  title: string;
}

export default function ListNav() {
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='*' element={<NavLayout />}>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

const tutorialItems = Tutorials.map((tutorial: Tutorial) => (
  <li className='nav-list__item' key={uuid()}>
    <Anchor
      className='nav-list__link'
      color={'light'}
      href={tutorial.href}
      icon={<Book />}
      label={tutorial.title}
    />
  </li>
));

function NavLayout() {
  return (
    <Nav align='start' direction='row' gap='medium' justify='start'>
      <ul className='nav-list'>{tutorialItems}</ul>
    </Nav>
  );
}
