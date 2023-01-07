import React from 'react';
import styles from './Header.module.css';
import Netflix from '../../Assets/netflix-logo-png-2582.png';
import { ReactComponent as Notification } from '../../Assets/bell-regular.svg';
import ProfilePic from '../../Assets/silco.jpg';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import { ReactComponent as CarretDown } from '../../Assets/caret-down-solid.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={Netflix} alt="Logo da Netflix" className={styles.logo} />
        <HeaderNav />
      </div>
      <div className={styles.headerRight}>
        <HeaderSearch />
        <Notification className={styles.notification} />
        <div className={styles.profileDropdownMenu}>
          <div className={styles.profilePic}>
            <img src={ProfilePic} alt="Foto de perfil" />
          </div>
          <CarretDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
