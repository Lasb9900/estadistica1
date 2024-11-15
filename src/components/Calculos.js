// src/components/Calculos.js
export function calcularHuellaPorCategoria(respuestas = {}) {
  return {
    Transporte: (respuestas.kmAuto || 0) * 0.21 + 
                (respuestas.kmAvion || 0) * 0.15 +
                (respuestas.kmBus || 0) * 0.05 +
                (respuestas.kmTren || 0) * 0.03,
    Hogar: (respuestas.kWhElectricidad || 0) * 0.5 + 
           (respuestas.m3Gas || 0) * 2.1,
    Alimentación: (respuestas.kgCarne || 0) * 27 + 
                  (respuestas.kgPollo || 0) * 6.9 + 
                  (respuestas.kgVegetales || 0) * 2,
    Consumo: (respuestas.numRopa || 0) * 30 + 
             (respuestas.numElectronicos || 0) * 200,
  };
}

const factoresEmision = {
    transporte: {
      auto: 0.21, // kg CO2e por km
      avion: 0.15, // kg CO2e por km
      bus: 0.05, // kg CO2e por km
      tren: 0.03, // kg CO2e por km
    },
    hogar: {
      electricidad: 0.5, // kg CO2e por kWh
      gas: 2.1, // kg CO2e por m3
      renovable: 0, // kg CO2e por kWh
    },
    alimentacion: {
      carne: 27, // kg CO2e por kg
      pollo: 6.9, // kg CO2e por kg
      vegetales: 2, // kg CO2e por kg
    },
    consumo: {
      ropa: 30, // kg CO2e por prenda
      electronicos: 200, // kg CO2e por dispositivo
    },
  };
  
  export function calcularHuella(respuestas = {}) {
    // Asignar valores predeterminados si las respuestas están indefinidas
    const totalEmisiones =
      (respuestas.kmAuto || 0) * factoresEmision.transporte.auto +
      (respuestas.kmAvion || 0) * factoresEmision.transporte.avion +
      (respuestas.kmBus || 0) * factoresEmision.transporte.bus +
      (respuestas.kmTren || 0) * factoresEmision.transporte.tren +
      (respuestas.kWhElectricidad || 0) * factoresEmision.hogar.electricidad +
      (respuestas.m3Gas || 0) * factoresEmision.hogar.gas +
      (respuestas.kgCarne || 0) * factoresEmision.alimentacion.carne +
      (respuestas.kgPollo || 0) * factoresEmision.alimentacion.pollo +
      (respuestas.kgVegetales || 0) * factoresEmision.alimentacion.vegetales +
      (respuestas.numRopa || 0) * factoresEmision.consumo.ropa +
      (respuestas.numElectronicos || 0) * factoresEmision.consumo.electronicos;
  
    return totalEmisiones; // kg CO2e al año

    
  }
  