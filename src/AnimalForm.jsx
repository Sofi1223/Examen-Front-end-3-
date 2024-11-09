import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import './AnimalForm.css';

const AnimalForm = () => {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para "nombre"
    if (nombre.trim().length < 3 || nombre.trim() !== nombre) {
      setError("Por favor chequea que la información sea correcta");
      setShowCard(false);
      return;
    }

    // Validación para "especie"
    if (especie.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setShowCard(false);
      return;
    }

    // Si pasa todas las validaciones, limpia el error y muestra la tarjeta
    setError('');
    setShowCard(true);
  };

  return (
    <div className="form-container">
      <h1>Formulario de Animal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa el nombre"
          />
        </label>
        <label>
          Especie:
          <input
            type="text"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            placeholder="Ingresa la especie"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {showCard && <AnimalCard nombre={nombre} especie={especie} />}
    </div>
  );
};

export default AnimalForm;

