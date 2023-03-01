import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experince'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='Portfolio/' element={<Home />} />
          <Route path='Portfolio/about' element={<About />} />
          <Route path='Portfolio/contact' element={<Contact />} />
          <Route path='Portfolio/experience' element={<Experience />} />
          <Route path='Portfolio/skills' element={<Skills />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
