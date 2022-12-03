import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Authentication from './components/auth/authentication.component';
import Beats from './components/beats/beats.component';
import { useEffect, useState } from 'react'
import axios from 'axios';




function App() {

  useEffect(() => {
    axios.get('http://localhost:5005/api')
    .then((response) => {
      console.log(response);

    })
  }, [] ); 

  
  return (
    
    <div className="App">
      <h1 className='main-head-container'>Producer Dashboard</h1>
        <Navigation />
      <Routes>
          <Route path='/auth' element={ <Authentication /> } />
          <Route path='/beats' element={ <Beats /> } />
      </Routes>
      
    </div>

    
  );
}

export default App;
