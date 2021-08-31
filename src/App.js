import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
//import { motion } from 'framer-motion';
//import {Element} from 'react-scroll';
import React from 'react';
import DevOps from './jobs/DevOps';
import SrFullStack from './jobs/SrFullStack';
import TechLead from './jobs/TechLead';
import Navbar from './components/Navbar';
import BlockchainDev from './jobs/BlockchainDev';
import Apply from './pages/Apply';

function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/DevOps" exact component={DevOps}/>
          <Route path="/SrFullStack" exact component={SrFullStack}/>
          <Route path="/TechLead" exact component={TechLead}/>
          <Route path="/BlockchainDev" exact component={BlockchainDev}/>
          <Route path="/Apply" exact component={Apply}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App
