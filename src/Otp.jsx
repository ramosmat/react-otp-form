import React from 'react';
import styles from './Otp.module.css';

const Otp = () => {
  const firstInputRef = React.useRef(null);
  const lastInputRef = React.useRef(null);
  const [otp, setOtp] = React.useState(['', '', '', '', '']);

  React.useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    window.alert('O código OTP foi enviado com sucesso!');
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

  // Função para colar os dados com Ctrl + V
  function handlePaste(event) {
    //12341
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text');
    const otpArray = pastedData.split('').filter((el) => /^\d*$/.test(el));

    if (otpArray.length != 5) {
      window.alert(
        'O código informado está com formato inválido. Devem ser 5 valores numericos',
      );
    } else {
      setOtp(otpArray);
      lastInputRef.current.focus();
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
          type="number"
          value={otp[0]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          ref={firstInputRef}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-1"
          required
          maxLength={1}
          type="number"
          value={otp[1]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-2"
          required
          maxLength={1}
          type="number"
          value={otp[2]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-3"
          required
          maxLength={1}
          type="number"
          value={otp[3]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          name="otp-4"
          required
          maxLength={1}
          type="number"
          value={otp[4]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          ref={lastInputRef}
        />
      </div>
      <button>Verificar OTP</button>
    </form>
  );
};

export default Otp;
