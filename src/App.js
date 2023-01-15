
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
