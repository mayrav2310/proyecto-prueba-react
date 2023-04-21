import { Historial, ImagenHistory, Info, NombreHistory, DivButtonHistory, ButtonHistory } from "../styles/StyledComponents";


function HistorialComponent({ character, onViewButtonClick }) {
  return (
    <Historial>
      <ImagenHistory src={character.image}></ImagenHistory>
      <Info>
        <NombreHistory>{character.name}</NombreHistory>
        <DivButtonHistory>
          <ButtonHistory onClick={() => onViewButtonClick(character)}>
            VER
          </ButtonHistory>
        </DivButtonHistory>
      </Info>
    </Historial>
  );
}

export default HistorialComponent;
