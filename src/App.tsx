import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConvertButton from './components/ConvertButton'
import { ThemeProvider } from './components/ThemeContext'
import Stats from './components/Stats'

const App = () => {
  return (
    <>
    <ThemeProvider>
    <Navbar></Navbar>
    <Hero></Hero>
    <Stats></Stats>
    <ConvertButton></ConvertButton>
    </ThemeProvider>
    </>
  )
}

export default App