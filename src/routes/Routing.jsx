import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarAndFooter from '../layout/NavbarAndFooter'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Product from '../pages/product/Product'
import Contact from '../pages/contact/Contact'

const Routing = () => {
  return (
    <BrowserRouter>
    <NavbarAndFooter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </NavbarAndFooter>
      </BrowserRouter>
  )
}

export default Routing