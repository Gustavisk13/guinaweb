import React from 'react'
import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}> {text} </label>
      
      <div className={styles.container_input}>
        <div className={styles.icon_Input}>
          img
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={handleOnChange}
          value={value}
          autoComplete='on'
        />
      </div>
    </div>
  );
};

export default Input;