import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Anchor, Nav } from 'grommet';
import { Book } from 'grommet-icons';
import ErrorPage from './pages/Error';

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

function NavLayout() {
  return (
    <Nav align='start' direction='row' gap='medium' justify='start'>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <Anchor
            className='nav-list__link'
            color={'light'}
            href='/tutorial-forms'
            icon={<Book />}
            label='Building an accessible forms using React'
          />
        </li>
        <li className='nav-list__item'>
          <Anchor
            className='nav-list__link'
            color={'light'}
            href='#'
            icon={<Book />}
            label='Placeholder link to longer tutorial name'
          />
        </li>
      </ul>
    </Nav>
  );
}
