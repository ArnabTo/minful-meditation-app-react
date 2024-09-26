import './App.css'
import About from './components/About'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Benefits/>
    </div>
  )
}

export default App
