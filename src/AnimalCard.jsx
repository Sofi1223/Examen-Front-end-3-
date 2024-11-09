import React from 'react';
import './AnimalForm.css';

const AnimalCard = ({ nombre, especie }) => {
  return (
    <div className="card">
      <h2>Datos del animal</h2>
      <p>Nombre: {nombre}</p>
      <p>Especie: {especie}</p>
    </div>
  );
};

export default AnimalCard;
