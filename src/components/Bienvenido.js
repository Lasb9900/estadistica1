// src/components/Bienvenido.js
import React, { useState } from 'react';
import './Bienvenido.css';

function Bienvenido({ nextStep }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && id) {
      nextStep(name, id);
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="background">
      <div className="bienvenido-container">
        <h2>Bienvenido a la Encuesta de Carbono</h2>
        <p>Por favor, ingresa tus datos para comenzar la encuesta.</p>
        <form onSubmit={handleSubmit} className="bienvenido-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Cédula:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="start-button">Comenzar Encuesta</button>
        </form>
      </div>
    </div>
  );
}

export default Bienvenido;
