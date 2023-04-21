import React from 'react';
import HistorialComponent from './HistorialComponent';
import { ContenedorHistorial, TituloHistorial } from '../styles/StyledComponents';

function Historial({ charactersHistory, onViewButtonClick }) {
  return (
    <ContenedorHistorial>
      <TituloHistorial>Historial de personajes</TituloHistorial>
      {charactersHistory.map((character, index) => (
        <HistorialComponent key={index} character={character} onViewButtonClick={onViewButtonClick} />
      ))}
    </ContenedorHistorial>
  );
}

export default Historial;
