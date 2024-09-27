import './App.css'
import About from './components/About'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonies from './components/Testimonies'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Benefits/>
      <Testimonies/>
      <Pricing/>
    </div>
  )
}

export default App
