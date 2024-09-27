import AnimatedCursor from 'react-animated-cursor'
import './App.css'
import About from './components/About'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonies from './components/Testimonies'
import StartJourney from './components/StartJourney'
import Contact from './components/Contact'


function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonies />
      <Pricing />
      <StartJourney />
      <Contact />
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  )
}

export default App
