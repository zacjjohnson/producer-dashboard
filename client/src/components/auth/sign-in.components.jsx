import { useState } from 'react';
import '../auth/sign-in.styles.css';

    const defaultFormFields = {
        email: '',
        password: '',
      };

const SignIn = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-in-container">
            <form>
                <label>
                    Email:
                </label>
                <input type="text" className="input-form" name="email" value={email} onChange={handleChange}/>

                <label>
                    Password:
                </label>
                <input type="password" name="password" className="input-form" value={password} onChange={handleChange} />

                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;