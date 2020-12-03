import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '../Alert';
import { login, resetSign } from '../../redux/actions/authActions';

const LogIn = () => {
    const authError = useSelector(state => state.auth.authError);
    const isLogged = useSelector(state => state.auth.isLogged);
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, pass));
    };

    useEffect(() => {
        dispatch(resetSign());
    }, []);

    useEffect(() => {
        if(isLogged) {
            history.push('/');
        }
    }, [isLogged]);

    return (
        <div className = 'modal login'>
            {
                authError && <Alert error = {authError} />
            }
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
                <div className = 'modal__info'>
                    Doesn't have an accout? <Link to = '/signup'>Create now</Link>
                </div>
            </form>
        </div>
    )
};

export default LogIn;
