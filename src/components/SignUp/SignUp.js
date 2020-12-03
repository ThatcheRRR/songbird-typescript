import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false)
    }
    return (
        <div className = 'modal signup'>
            {
                error
                && (
                    <div className = 'modal__alert'>
                        {error}
                    </div>
                )
            }
            <form className = 'modal__form form' onSubmit = {handleSubmit}>
                <h2>Sign Up</h2>
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
                <div className = 'form__control'>
                    <label htmlFor = 'confirm'>
                        Confirm password
                    </label>
                    <input id = 'confirm' type = 'password' ref = {passwordConfirmRef} />
                </div>
                <button disabled = {loading}>
                    Sign Up
                </button>
                <div className = 'info'>
                    Already got an account? <Link to = '/login'>Log In</Link>
                </div>
            </form>
        </div>
    )
};

export default SignUp;
