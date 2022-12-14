import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Beats from './components/beats/beats.component';
import { useEffect, useContext } from 'react'
import axios from 'axios';
import HomePage from './components/homePage/homePage.component';
import SignIn from './components/auth/sign-in.components';
import SignUp from './components/auth/sign-up.component';
import { AuthContext } from './context/auth.context';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import Profile from './components/profile/profile.component';





function App() {

  const { isLoggedIn, user } = useContext(AuthContext);
    console.log(user)


  useEffect(() => {
    axios.get('http://localhost:5005/api')
    .then((response) => {
      console.log(response);

    })
  }, [] ); 

  
  return (
    
    <div className="App">
      {/* {!isLoggedIn && (
        <h1 className='main-head-container'>Producer Dashboard</h1>
      )}

      {isLoggedIn && (
        <h1 className='main-head-container'>{user.name} Dashboard</h1>
      )} */}
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

          <Route 
          path='/profile'
          element={ <IsPrivate> <Profile /> </IsPrivate> } />
      </Routes>
      
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      
    </Routes>

    
      
    </div>

    
  );
}

export default App;
