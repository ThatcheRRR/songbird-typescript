import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Alert from '../Alert';
import { signup } from '../../redux/actions/authActions';

const SignUp = () => {
    const authError = useSelector(state => state.auth.authError);
    const isSigned = useSelector(state => state.auth.isSigned);
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signup(email, pass, confirm));
    };

    useEffect(() => {
        if(isSigned) {
            history.push('/login');
        }
    }, [isSigned]);

    return (
        <div className = 'modal signup'>
            {
                authError && <Alert error = {authError} />
            }
            <form className = 'modal__form form' onSubmit = {handleSubmit}>
                <h2>Sign Up</h2>
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
                <div className = 'form__control'>
                    <label htmlFor = 'confirm'>
                        Confirm password
                    </label>
                    <input
                        id = 'confirm'
                        type = 'password'
                        value = {confirm}
                        onChange = {e => setConfirm(e.target.value)}
                    />
                </div>
                <button>
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
