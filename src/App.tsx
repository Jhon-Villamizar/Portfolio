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
//import Projects from './pages/Projects'
import HeaderConfig from './components/HeaderConfig'
import MobilMenu from './components/MobileMenu'
import { AdminConsumer } from './store/Context'

const App = () => {
  const { menu } = AdminConsumer()

  return (
    <BrowserRouter>
      <Layout>
        <HeaderConfig />
        {menu ? (
          <MobilMenu />
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/journey' element={<Journey />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
            {/*<Route path='/projects' element={<Projects />} /> */}
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        )}
      </Layout>
    </BrowserRouter>
  )
}

export default App
