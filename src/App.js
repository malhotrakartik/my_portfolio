import React from 'react';
import FirstPage from './components/FirstPage';
import './App.css'
import ParticleBackground from './components/ParticleBackground';
import About from './components/About';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {

  
    return (
        <div className = "main-container">
            
            <Navbar/>
            
            
                <FirstPage/>
                <About/>
                <Education/>
                <Experience/>
                <Projects/>
                <Contact/>
            
 
        </div>
    )
}

export default App
