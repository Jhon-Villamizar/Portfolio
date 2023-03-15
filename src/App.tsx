/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experince'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'
import './App.scss'
import Journey from './pages/Journey'
import Projects from './pages/Projects'
import HeaderConfig from './components/HeaderConfig'

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <HeaderConfig />

        <Routes>
          <Route path='Portfolio/' element={<Home />} />
          <Route path='Portfolio/about' element={<About />} />
          <Route path='Portfolio/journey' element={<Journey />} />
          <Route path='Portfolio/skills' element={<Skills />} />
          <Route path='Portfolio/experience' element={<Experience />} />
          <Route path='Portfolio/projects' element={<Projects />} />
          <Route path='Portfolio/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
