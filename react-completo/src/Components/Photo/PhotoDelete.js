import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
    const {loading, request} = useFetch();

    async function handleClick() {
        const confirm = window.confirm("Delete this Post ?");
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options); 
            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>Delete</button>
            ) : (
                <button className={styles.delete} onClick={handleClick}>
                    Delete
                </button>
            )}
        </>
    );
};

export default PhotoDelete;