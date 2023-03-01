import { createBrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Experience from '../pages/Experince'
import Home from '../pages/Home'
import Skills from '../pages/Skills'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])
