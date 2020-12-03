import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Alert from '../Alert';

const LogIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch(error) {
            setError(error.message);
        }

        setLoading(false);
    }
    return (
        <div className = 'modal login'>
            {
                error && <Alert error = {error} />
            }
            <form className = 'modal__form form' onSubmit = {handleSubmit}>
                <h2>Log In</h2>
                <div className = 'form__control'>
                    <label htmlFor = 'email'>
                        Email
                    </label>
                    <input id = 'email' type = 'email' ref = {emailRef} />
                </div>
                <div className = 'form__control'>
                    <label htmlFor = 'password'>
                        Password
                    </label>
                    <input id = 'password' type = 'password' ref = {passwordRef} />
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
