// src/components/Resultados.js
import React from 'react';
import { calcularHuella } from './Calculos';
import './Resultados.css';

function Resultados({ respuestas }) {
  const huellaCarbono = calcularHuella(respuestas || {});

  return (
    <div className="resultados-container">
      <h2>Tu Huella de Carbono Anual</h2>
      <p className="emission-result">{huellaCarbono.toFixed(2)} kg de CO₂e</p>
      <p>Este es el equivalente en emisiones de carbono que generas anualmente basado en tus respuestas.</p>

      <div className="suggestions">
        <h3>Recomendaciones para Reducir tu Huella</h3>
        <ul>
          <li>Utiliza transporte público o bicicleta en lugar de automóvil.</li>
          <li>Considera una dieta con menos carne y más vegetales.</li>
          <li>Opta por fuentes de energía renovable en tu hogar.</li>
          <li>Reduce el consumo de bienes no esenciales.</li>
        </ul>
      </div>
    </div>
  );
}

export default Resultados;
