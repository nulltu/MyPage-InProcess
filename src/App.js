import Header from './components/Header'
import Footer from './components/Footer'
import 'materialize-css/dist/css/materialize.css'
import Presentation from './components/Presentation'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import IconsSocial from './components/IconsSocial'

function App() {
  return (
   <>
    <Header />
    <Presentation />
    <IconsSocial />
    {/* <AboutMe />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer /> */}
   </>
  )
}
export default App;
