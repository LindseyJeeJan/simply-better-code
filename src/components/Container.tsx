import React from 'react';
import { Box } from 'grommet';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import { Outlet } from 'react-router-dom';

export default function Container() {
  return (
    <>
      <Box height='100vh'>
        <MainHeader />
        <main>
          <Outlet />
        </main>
        <MainFooter />
      </Box>
    </>
  );
}
