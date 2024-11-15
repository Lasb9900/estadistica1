import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './Resultados.css';

// Registrar los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Resultados({ respuestas }) {
  // Ejemplo: cálculo de emisiones por categoría (puedes adaptar según tus datos)
  const emisionesPorCategoria = {
    Transporte: 1200,
    Hogar: 800,
    Alimentación: 600,
    Consumo: 400,
  };
  const totalEmisiones = Object.values(emisionesPorCategoria).reduce((a, b) => a + b, 0);

  // Configuración para gráficos
  const barData = {
    labels: Object.keys(emisionesPorCategoria),
    datasets: [
      {
        label: 'Emisiones (kg CO₂e)',
        data: Object.values(emisionesPorCategoria),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: Object.keys(emisionesPorCategoria),
    datasets: [
      {
        data: Object.values(emisionesPorCategoria),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="resultados-container">
      <h2>Tu Huella de Carbono Anual</h2>
      <p className="emission-result">{totalEmisiones.toFixed(2)} kg de CO₂e</p>
      <div className="chart-container">
        <h3>Emisiones por Categoría</h3>
        <Bar data={barData} options={{ responsive: true }} />
      </div>
      <div className="chart-container">
        <h3>Distribución de Emisiones</h3>
        <Pie data={pieData} options={{ responsive: true }} />
      </div>
    </div>
  );
}

export default Resultados;
