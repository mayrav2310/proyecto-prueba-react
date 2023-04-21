import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ViewCharacter from './components/ViewCharacter';
import ViewHistorial from './components/ViewHistorial';
import { ContenedorPrincipal } from './styles/StyledComponents';

function App() {
  const [charactersHistory, setCharactersHistory] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const onCharacterGenerated = useCallback((newCharacter) => {
    setCharactersHistory((prevCharacters) => [newCharacter, ...prevCharacters]);
  }, []);
  const onViewButtonClick = (character) => {
    setSelectedCharacter(character);
  }

  return (
    <div>
      <Header />
      <ContenedorPrincipal>
        <ViewCharacter oldCharacter={selectedCharacter} onCharacterGenerated={onCharacterGenerated}/>
        {
          charactersHistory.length > 0 && <ViewHistorial charactersHistory={charactersHistory} onViewButtonClick={onViewButtonClick} />
        }
        
      </ContenedorPrincipal>
    </div>
  );
}

export default App;
