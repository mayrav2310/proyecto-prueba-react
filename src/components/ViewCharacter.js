import { useState, useEffect }from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/queries";
import {
  DivPrincipal,
  DivCards,
  DivImagen,
  Img,
  DivTabla,
  TituloTabla,
  SubtituloTabla,
  ContenidoTabla,
  ContenedorBoton,
  Button,
  VistaBienvenida,
} from "../styles/StyledComponents";

function ViewCharacter({ oldCharacter, onCharacterGenerated }) {
  const keysForExclude = ["image", "id", "name"];
  const [getCharacter, { loading, data }] = useLazyQuery(GET_CHARACTER);
  const [character, setCharacter] = useState(null);
  const [hasCharacter, setHasCharacter] = useState(false)

  useEffect(() => {
    if (data?.character) {
      let character = JSON.parse(JSON.stringify(data.character));
      delete character.__typename;
      character = {
        ...character,
        origin: character.origin.name,
        location: character.location.name,
      };
      setCharacter(character);
      onCharacterGenerated(character);
      setHasCharacter(true)
    }
  }, [data, onCharacterGenerated]);

  useEffect(() => {
    setCharacter(oldCharacter);
  }, [oldCharacter]);


  return (
    <DivPrincipal>
      {character ? (
        <DivCards>
          <DivImagen>
            <Img src={character.image}></Img>
          </DivImagen>
          <DivTabla>
            {/* CABEZERA */}
            <div>
              <TituloTabla>{character.name}</TituloTabla>
              <SubtituloTabla>CHARACTER ID: {character.id}</SubtituloTabla>
            </div>
            {/* FOR */}
            {Object.entries(character).map((entry) =>
              keysForExclude.includes(entry[0]) ? null : (
                <ContenidoTabla key={entry[0]}>
                  <b style={{textTransform: "capitalize"}}>{entry[0]}</b>
                  <span>{entry[1]}</span>
                </ContenidoTabla>
              )
            )}
          </DivTabla>
        </DivCards>
      ) : (
        <VistaBienvenida>
           <h1>¡Bienvenid@!</h1> 
           <h3>Presiona el boton para ver y generar un personaje</h3>
        </VistaBienvenida>
      )}
      <ContenedorBoton hasCharacter={hasCharacter}>
        <Button
          onClick={() =>
            getCharacter({
              variables: { id: Math.floor(Math.random() * 826) + 1 },
            })
          }
          disabled={loading}
          loading={loading}
        >
          {loading ? "Cargando" : "Generar"}
        </Button>
      </ContenedorBoton>
    </DivPrincipal>
  );
}

export default ViewCharacter;
