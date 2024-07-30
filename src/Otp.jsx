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
        />
      </div>
      <button>Verificar OTP</button>
    </form>
  );
};

export default Otp;
