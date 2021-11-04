import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar'
import Home from './components/pages/Home';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
function App() {
  return (
<>
<Router>
      <Navbar />
      
      <SideBar />
      
      
      <Switch>
      <Route path='/' exact component={Home} />
      </Switch>
    
    
    </Router>
</>
  );
}

export default App;
