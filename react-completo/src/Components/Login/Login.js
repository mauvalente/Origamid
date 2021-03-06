import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const Login = () => {
    const { login } = React.useContext(UserContext);

    if (login === true) return <Navigate to="/account" />
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />}></Route>
                    <Route path="create" element={<LoginCreate />}></Route>
                    <Route path="lost" element={<LoginPasswordLost />}></Route>
                    <Route path="reset" element={<LoginPasswordReset />}></Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </section>

    )
}

export default Login;