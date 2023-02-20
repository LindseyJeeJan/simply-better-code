import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Anchor, Nav } from 'grommet';
import ErrorPage from './pages/Error';

export default function ListNav() {
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

function NavLayout() {
  return (
    <Nav direction='row' gap='medium' align='start' justify='start'>
      <Anchor color={'light'} href='/tutorial-forms' label='Accessible Forms' />
    </Nav>
  );
}
