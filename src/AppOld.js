//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import styled from 'styled-components';
//import { motion } from 'framer-motion';
//import {Element} from 'react-scroll';

function App() {
  return (
     <div>
       <AppWrapper>
        <Navbar/>
        
        <Home/>
        <About/>    
        <Services/>
        <Projects/> 
      </AppWrapper>
    </div>
  );
}

export default App;


const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  @media (max-width: 1024px){
    height: 100%;
  }
`;

//const Snap = styled.div`
//  scroll-snap-align: start;
//`