import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URI = "http://localhost:5005";

const defaultFormFields = {
    name: '',
    email: '',
    password: ''
  };

  

const SignUp = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { name, email, password } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      }; 

    const navigate = useNavigate();


    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        const requestBody = { name, email, password };

        axios.post(`${API_URI}/auth/signup`, requestBody)
        .then((response) => {
            navigate('/');
            resetFormFields();
        })
        .catch((error) => {
            console.log(error);
        })
        
    }  

    return (
        <div>

            <form onSubmit={handleSignUpSubmit}>
                    <label>
                        Name:
                    </label>
                    <input 
                    type='text' 
                    className='input-form' 
                    name='name' 
                    value={name} 
                    onChange={handleChange}
                    />
    
                    <label>
                        Email:
                    </label>
                    <input 
                    type="text" 
                    className="input-form" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    />
    
                    <label>
                        Password:
                    </label>
                    <input 
                    type="password" 
                    name="password" 
                    className="input-form" 
                    value={password} 
                    onChange={handleChange} 
                    />
    
                    <button type='submit'>Sign In</button>
                </form>
    
    
            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>

        </div>
    )
}

export default SignUp;