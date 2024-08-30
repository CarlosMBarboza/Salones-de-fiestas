
import CardMap from './components/card/CardMap'
import CardDitail from './components/cardDitails.jsx/CardDitail'
import Carousel from './components/carousel/Carousel'
import NavbarAndFooter from './layout/NavbarAndFooter'


function App() {
  return (
    <div className='Container'>
    <NavbarAndFooter>
      <Carousel/>
      <CardMap/>
      <CardDitail />
    </NavbarAndFooter>
    </div>
  )
}


export default App
