import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, pass, confirm);
    };

    return (
        <div className = 'modal login'>
            <form className = 'modal__form form' onSubmit = {handleSubmit}>
                <h2>Log In</h2>
                <div className = 'form__control'>
                    <label htmlFor = 'email'>
                        Email
                    </label>
                    <input
                        id = 'email'
                        type = 'email'
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                </div>
                <div className = 'form__control'>
                    <label htmlFor = 'password'>
                        Password
                    </label>
                    <input
                        id = 'password'
                        type = 'password'
                        value = {pass}
                        onChange = {e => setPass(e.target.value)}
                    />
                </div>
                <button>
                    Log In
                </button>
                <div className = 'info'>
                    Doesn't have an accout? <Link to = '/signup'>Create now</Link>
                </div>
            </form>
        </div>
    )
};

export default LogIn;
