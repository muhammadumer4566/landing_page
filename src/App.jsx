import Cards from "./component/cards"
import Footer from "./component/Footer"
import Hero from "./component/hero"
import HeroSection from "./component/HeroSection"
import Product from "./component/Product"
import Shop from "./component/Shop"
import Subscribe from "./component/Subscribe"
import TopHeader from "./component/TopHeader"

const App = () => {
  return (
    <div>
      <TopHeader/>
      <HeroSection/>
      <Shop/>
      <Product/>
      <Hero/>
      <Cards/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
