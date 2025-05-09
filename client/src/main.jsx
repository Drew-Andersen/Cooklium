import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import App from './App';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);