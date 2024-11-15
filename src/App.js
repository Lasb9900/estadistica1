// src/App.js
import React, { useState } from 'react';
import Bienvenido from './components/Bienvenido';
import Encuesta from './components/Encuesta';
import Resultados from './components/Resultados';

import './Global.css'; // Importa solo los estilos globales

function App() {
  const [step, setStep] = useState(0); // Controla el flujo de pasos
  const [answers, setAnswers] = useState({}); // Guarda las respuestas del usuario
  const [userInfo, setUserInfo] = useState({ name: '', id: '' }); // Guarda los datos del usuario

  // Avanza al siguiente paso
  function nextStep() {
    return setStep(step + 1);
  }

  // Retrocede al paso anterior
  const prevStep = () => setStep(step - 1);

  // Guarda la información del usuario y avanza a la encuesta
  const saveUserInfo = (name, id) => {
    setUserInfo({ name, id });
    nextStep();
  };

  // Guarda las respuestas de la encuesta
  const saveAnswer = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  return (
    <div className="App">
      {step === 0 && <Bienvenido nextStep={saveUserInfo} />}
      {step === 1 && (
        <Encuesta
          nextStep={nextStep}
          prevStep={prevStep}
          saveAnswer={saveAnswer}
          answers={answers}
        />
      )}
      {step === 2 && <Resultados answers={answers} userInfo={userInfo} />}
    </div>
  );
}

export default App;
