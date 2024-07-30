import React from 'react';
import styles from './Otp.module.css';

const Otp = () => {
  const ref = React.useRef(null);
  const [otp, setOtp] = React.useState(['', '', '', '', '']);

  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  // Função para sempre atualizar o valor do estado otp
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const nextInput = event.target.nextElementSibling;

    const index = name.split('-')[1];

    setOtp((prevOtp) => {
      const newOTP = [...prevOtp];
      newOTP[index] = value;
      return newOTP;
    });

    if (value && nextInput) {
      nextInput.focus();
    }
  }

  // Função para selecionar cada um dos inputs de acordo com a tecla
  function handleKeyDown(event) {
    const prevInput = event.target.previousElementSibling;
    const nextInput = event.target.nextElementSibling;

    const { key } = event;

    if (key === 'Backspace' && !event.target.value && prevInput) {
      prevInput.focus();
    }
    if (key === 'ArrowLeft' && prevInput) {
      prevInput.focus();
    }
    if (key === 'ArrowRight' && nextInput) {
      nextInput.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.divInput}>
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-0"
          required
          maxLength={1}
          type="text"
          value={otp[0]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={ref}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-1"
          required
          maxLength={1}
          type="text"
          value={otp[1]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-2"
          required
          maxLength={1}
          type="text"
          value={otp[2]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-3"
          required
          maxLength={1}
          type="text"
          value={otp[3]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-4"
          required
          maxLength={1}
          type="text"
          value={otp[4]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button>Verificar OTP</button>
    </form>
  );
};

export default Otp;
