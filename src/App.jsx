import React from 'react';
import Icon from './Assets/icon.svg?react';
import Otp from './Otp';
import './App.css';

const App = () => {
  return (
    <section className="container">
      <div className="title">
        <Icon />
        <h1>Preencha o código</h1>
        <p>Enviamos um código por email e por SMS</p>
      </div>
      <Otp />
    </section>
  );
};

export default App;
