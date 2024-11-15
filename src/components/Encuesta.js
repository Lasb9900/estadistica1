// src/components/encuesta.js
import React, { useState } from 'react';
import './Encuesta.css';

const questions = [
  {
    category: 'Transporte',
    question: '¿Cuántos kilómetros conduces semanalmente en automóvil?',
    options: ['0-50 km', '50-200 km', '200-500 km', '500+ km'],
  },
  {
    category: 'Transporte',
    question: '¿Usas transporte público semanalmente?',
    options: ['Sí', 'No'],
  },
  {
    category: 'Hogar',
    question: '¿Cuál es tu principal fuente de energía para calefacción?',
    options: ['Electricidad', 'Gas', 'Leña', 'Otro'],
  },
  {
    category: 'Hogar',
    question: '¿Utilizas energía renovable en tu hogar?',
    options: ['Sí', 'No'],
  },
  {
    category: 'Alimentación',
    question: '¿Consumes carne roja semanalmente?',
    options: ['Sí', 'No'],
  },
  {
    category: 'Alimentación',
    question: '¿Qué porcentaje de tu alimentación es vegetariana?',
    options: ['0%', '25%', '50%', '75%', '100%'],
  },
  {
    category: 'Consumo Personal',
    question: '¿Con qué frecuencia compras ropa nueva?',
    options: ['Mensualmente', 'Cada 3 meses', 'Anualmente', 'Rara vez'],
  },
  {
    category: 'Consumo Personal',
    question: '¿Cuántos dispositivos electrónicos nuevos compras al año?',
    options: ['0', '1', '2', '3+'],
  },
];

function Encuesta({ nextStep, prevStep, saveAnswer, answers }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswer = (option) => {
    saveAnswer(currentQuestion, option);

    if (currentQuestion < questions.length - 1) {
      const newProgress = ((currentQuestion + 1) / questions.length) * 100;
      setProgress(newProgress);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      nextStep(); // Avanzar a resultados
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      const newProgress = ((currentQuestion - 1) / questions.length) * 100;
      setProgress(newProgress);
      setCurrentQuestion(currentQuestion - 1);
    } else {
      prevStep();
    }
  };

  return (
    <div className="encuesta-container">
      <h2 className="encuesta-category">{questions[currentQuestion].category}</h2>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p className="encuesta-question">{questions[currentQuestion].question}</p>
      <div className="encuesta-options">
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)} className="option-button">
            {option}
          </button>
        ))}
      </div>
      <div className="encuesta-navigation">
        <button onClick={handleBack} disabled={currentQuestion === 0} className="nav-button">Anterior</button>
        <button onClick={() => handleAnswer(answers[currentQuestion])} className="nav-button">Siguiente</button>
      </div>
    </div>
  );
}

export default Encuesta;
