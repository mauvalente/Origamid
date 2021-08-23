import React from 'react';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
// import './LoginCreate.modules.css';

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm("password");

    const { userLogin } = React.useContext(UserContext);
    const {loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = USER_POST({
            username: username.value,
            password: password.value,
            email: email.value,
        });
        const { response } = await request(url, options);
        if (response.ok) userLogin(username.value, password.value);
        console.log(response);


    }

    return (
        <section className="animeLeft">
            <Head title="Create Account" /> 
            <h1 className="title">Register</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Username" type="text" name="username" {...username} />
                <Input label="E-mail" type="email" name="email" {...email} />
                <Input label="Password" type="password" name="password" {...password} />
                { loading ? <Button disabled>Loading...</Button> : <Button>Register</Button>}
                <Error error={error} />
            </form>
        </section>

    )
}

export default LoginCreate;