import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Authentication from './components/auth/authentication.component';
import Beats from './components/beats/beats.component';
import { useEffect, useState } from 'react'
import axios from 'axios';
import HomePage from './components/homePage/homePage.component';
// import { Dropbox } from 'dropbox';

// const dbx = new Dropbox({ accessToken: process.env.DROPBOXAPI});

// console.log(dbx)



function App() {

  // const button = Dropbox.createChooseButton(options);
  //     document.getElementById("container").appendChild(button);

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
      
    
      <HomePage />
      
    </div>

    
  );
}

export default App;
