import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from "./UserHeader.module.css";
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setStatus] = React.useState("");
    const location = useLocation();

    React.useEffect(() => {
        const {pathname} = location;

        switch(pathname) {
            case '/account/stats':
                setStatus('Statistics');
                break;
            case '/account/post':
                setStatus('Post');
                break;
            default:
                setStatus('My Account');
        }
    }, [location, setStatus]);

    return (
    <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
    </header>
    );
    

}

export default UserHeader;