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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
