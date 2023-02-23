import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
import 'static/scss/main.scss';
import App from 'components/App';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import Error from 'components/pages/Error';
import TutorialForms from 'components/pages/tutorials/TutorialForms';
import TutorialTodoList from 'components/pages/tutorials/TutorialTodoList';

// import store from 'store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'tutorials/tutorial-forms',
        element: <TutorialForms />,
      },
      {
        path: 'tutorials/tutorial-todo-list',
        element: <TutorialTodoList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router} />,

  // <Provider store={store}>

  // </Provider>,
);
