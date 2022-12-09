import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Beats from './components/beats/beats.component';
import { useEffect, useState } from 'react'
import axios from 'axios';
import HomePage from './components/homePage/homePage.component';
import SignIn from './components/auth/sign-in.components';
import SignUp from './components/auth/sign-up.component';

import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';






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
          <Route 
          path='/login' 
          element={ <IsAnon> <SignIn /> </IsAnon>  } />
          <Route 
          path='/signup' 
          element={ <IsAnon> <SignUp /> </IsAnon>  } />
          <Route 
          path='/beats' 
          element={ <IsPrivate> <Beats /> </IsPrivate>  } />
      </Routes>
      
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      
    </Routes>

    
      
    </div>

    
  );
}

export default App;
