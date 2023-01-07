import React from 'react';
import { ReactComponent as Search } from '../../Assets/magnifying-glass-solid.svg';
import styles from './HeaderSearch.module.css';

const HeaderSearch = () => {
  return <Search className={styles.search} />;
};

export default HeaderSearch;
