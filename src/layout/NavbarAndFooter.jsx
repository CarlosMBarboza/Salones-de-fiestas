
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'

const NavbarAndFooter = (props) => {
  const { children } = props
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default NavbarAndFooter