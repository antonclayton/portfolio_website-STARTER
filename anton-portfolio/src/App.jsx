import './App.css'
import { Navbar, Footer } from './components'
import { AboutMe, Projects, Skills, Contact} from './containers';

import { useEffect } from 'react'

function App() {

  // useEffect(() => {
  //   const handleRefresh = () => {
  //     window.scrollTo(0,0);
  //   }

  //   handleRefresh();

  // }, []);

  return (
    <div className="portfolio">
      <Navbar/>
      
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
