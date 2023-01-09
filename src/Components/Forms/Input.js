import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, name, placeholder, css, value, setValue }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }
  return (
    <>
      <input
        className={`${styles.input} ${css}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default Input;
