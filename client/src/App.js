import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Authentication from './components/auth/authentication.component';
import Beats from './components/beats/beats.component';
// import { useState } from 'react';




function App() {
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
