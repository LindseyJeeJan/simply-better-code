import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './static/scss/main.scss';
import App from './components/App';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Error404 from './components/pages/Error404';
import TutorialForms from './components/pages/tutorials/TutorialForms';
import TutorialTodoList from './components/pages/tutorials/TutorialTodoList';
import TutorialSemanticHtml from './components/pages/tutorials/TutorialSemanticHtml';
import TutorialAria from './components/pages/tutorials/TutorialAria';
import TutorialKeyboardNavigation from './components/pages/tutorials/TutorialKeyboardNavigation';
import TutorialModal from './components/pages/tutorials/TutorialModal';
import TutorialNavigationMenu from './components/pages/tutorials/TutorialNavigationMenu';
import TutorialAccordion from './components/pages/tutorials/TutorialAccordion';
import TutorialAlerts from './components/pages/tutorials/TutorialAlerts';

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
        { path: 'tutorials/tutorial-semantic-html', element: <TutorialSemanticHtml /> },
        { path: 'tutorials/tutorial-aria', element: <TutorialAria /> },
        { path: 'tutorials/tutorial-keyboard-navigation', element: <TutorialKeyboardNavigation /> },
        { path: 'tutorials/tutorial-modal', element: <TutorialModal /> },
        { path: 'tutorials/tutorial-navigation-menu', element: <TutorialNavigationMenu /> },
        { path: 'tutorials/tutorial-accordion', element: <TutorialAccordion /> },
        { path: 'tutorials/tutorial-alerts', element: <TutorialAlerts /> },
        { path: 'error404', element: <Error404 /> },

        // Redirect everything else
        { path: '*', element: <Navigate to='/error404' /> },
      ],
    },
  ],
  {
    basename: '/simply-better-code',
  },
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
