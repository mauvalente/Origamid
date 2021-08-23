import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

import styles from './UserPhotoPost.module.css';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
    const name = useForm();
    const weight = useForm('number');
    const age = useForm('number');
    const [img, setImg] = React.useState({});
    const {data, error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (data) navigate('/account');
    }, [data, navigate]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', name.value);
        formData.append('peso', weight.value);
        formData.append('idade', age.value);

        const token = window.localStorage.getItem('token');
        const {url, options} = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({target}) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],

        });
    }

    return (
    <section className={`${styles.photoPost} animeleft`}>
        <Head title="Post your photo" />
        <form onSubmit={handleSubmit}>
            <Input label="Name" type="text" name="name" {...name} />
            <Input label="Weight" type="number" name="weight" {...weight} />
            <Input label="Age" type="number" name="age" {...age} />
            <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} /> 
            {loading ? <Button disabled>Loading...</Button> : <Button>Send</Button>}
            <Error error={error} />
        </form>
        <div>
            {img.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
        </div>
    </section>);
}

export default UserPhotoPost;