import './App.css'
import { ThemeProvider } from './components/Provider/ThemeProvider'
import HomePage from './components/Home'



function App() {

  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <HomePage/>
    </ThemeProvider>
  )
}

export default App
