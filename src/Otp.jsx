import React from 'react';
import styles from './Otp.module.css';

const Otp = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.divInput}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button>Verificar OTP</button>
    </form>
  );
};

export default Otp;
