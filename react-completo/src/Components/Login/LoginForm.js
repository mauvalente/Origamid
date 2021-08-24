import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';


const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const {userLogin, error, loading} = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Login" />
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                {loading ? <Button disabled>Loading...</Button> : <Button>Enter</Button>}
                <Error error={error && "Something went wrong. Please try again."} />
            </form>
            <Link className={styles.lost} to="/login/lost">
                Lost Password
            </Link>
            <div className={styles.registration}>
                <h2 className={styles.subtitle}>Registration</h2>
                <p>Do not have account? Sign Up here.</p>
                <Link className={stylesBtn.button} to="/login/create">
                    Registration
                </Link>
            </div>
        </section>

    )
}

export default LoginForm;