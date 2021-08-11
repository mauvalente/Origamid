import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg';
import {ReactComponent as Statistics} from '../../Assets/estatisticas.svg';
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Logout} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const {userLogout} = React.useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/account" end activeClassName={styles.active}>
                <MyPhotos />
                {mobile && 'My Photos'}
            </NavLink>
            <NavLink to="/account/statistics" activeClassName={styles.active}>
                <Statistics />
                {mobile && 'Statistics'}    
            </NavLink>
            <NavLink to="/account/post" activeClassName={styles.active}>
                <AddPhoto />
                {mobile && 'Add Photo'}
            </NavLink>
            <button onClick={userLogout}><Logout /></button>
        </nav>
    );
    

}

export default UserHeaderNav;