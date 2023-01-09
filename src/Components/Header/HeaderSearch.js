import React from 'react';
import { ReactComponent as Search } from '../../Assets/magnifying-glass-solid.svg';
import Input from '../Forms/Input';
import styles from './HeaderSearch.module.css';

const HeaderSearch = () => {
  const [search, setSearch] = React.useState(null);

  return (
    <div className={styles.searchArea}>
      <Search className={styles.search} />
      <Input
        css={styles.input}
        name="search"
        type="text"
        value={search}
        setValue={setSearch}
        placeholder="Títulos, gente e gênero"
      />
    </div>
  );
};

export default HeaderSearch;
