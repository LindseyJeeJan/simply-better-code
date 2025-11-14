import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './static/scss/main.scss';
import App from './components/App';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Error404 from './components/pages/Error404';
import TutorialForms from './components/pages/tutorials/TutorialForms';
import TutorialTodoList from './components/pages/tutorials/TutorialTodoList';

// import store from 'store/store';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'tutorials/tutorial-forms', element: <TutorialForms /> },
        { path: 'tutorials/tutorial-todo-list', element: <TutorialTodoList /> },
        { path: 'error404', element: <Error404 /> },

        // Redirect everything else
        { path: '*', element: <Navigate to='/error404' /> },
      ],
    },
  ],
  {
    basename: '/simply-better-code/',
  },
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <Provider store={store}>
  <RouterProvider router={router} />,
  // </Provider>,
);
