import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end>
        Início
      </NavLink>
      <NavLink to="/series">Séries</NavLink>
      <NavLink to="/filmes">Filmes</NavLink>
      <NavLink to="/bombando">Bombando</NavLink>
      <NavLink to="/minhaLista">Minha lista</NavLink>
      <NavLink to="/navegarPorIdiomas">Navegar por idiomas</NavLink>
    </nav>
  );
};

export default HeaderNav;
