
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Skill from './components/Skill.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import  AOS from 'aos';
import  "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])
  return (
    <>
  <Header/>
  <Home/>
  <About/>
  <Work/>
  <Skill/>
  <Contact/>
  <Footer/>
  
  </>
  );
}

export default App;
