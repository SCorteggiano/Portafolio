import  { useState } from 'react';
import AppNavbar from './components/Navbar';
import Landing from './components/Landing';
import Tec from './components/Tec';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {



  return (
    <div>
      <AppNavbar/>
      <Landing/>
      <Tec/>
      <Projects  />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;