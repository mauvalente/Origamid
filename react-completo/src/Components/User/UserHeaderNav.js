import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg';
import {ReactComponent as Statistics} from '../../Assets/estatisticas.svg';
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Logout} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const {pathname} = useLocation();
    
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button 
                    aria-label="Menu" 
                    className={`${styles.mobileButton} 
                        ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}

            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to="/account" end activeClassName={styles.active}>
                    <MyPhotos />
                    {mobile && 'My Photos'}
                </NavLink>
                <NavLink to="/account/stats" activeClassName={styles.active}>
                    <Statistics />
                    {mobile && 'Statistics'}    
                </NavLink>
                <NavLink to="/account/post" activeClassName={styles.active}>
                    <AddPhoto />
                    {mobile && 'Add Photo'}
                </NavLink>
                <button onClick={userLogout}><Logout />{mobile && 'Exit'}</button>
            </nav>
        </>
    );
    

}

export default UserHeaderNav;