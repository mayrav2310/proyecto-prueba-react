import styled, { css } from 'styled-components';



export const Button = styled.button`
  position: relative;
  padding: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  background-color:  #6259ca;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6259ca;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-top-color: #ffffff;
    animation: spin 1s linear infinite;
    opacity: ${({ loading }) => (loading ? '1' : '0')}; // mostrar el spinner solo cuando la prop 'loading' es verdadera
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease-in-out;
  }

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
export const Header = styled.nav`
    height: 66px;
    background-color: #0e0e23;
    display: flex;
    align-items: center;
`;
export const Imagen = styled.img`
  height: 45px;
  margin-left: 25px;
  width: 215px;

`;
export const DivPrincipal = styled.div `
  margin-top: 15px;
`
export const DivCards = styled.div `
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 22rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
  }
`
export const DivImagen = styled.div `
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  background-color: #FFF;
  border-radius: 4px;
  padding: 16px;
`
export const Img = styled.img `
  height: 100%;
  width: 100%;
`
export const DivTabla = styled.div`
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  background-color: #FFF;
  border-radius: 4px;
  padding: 16px 30px;
`
export const TituloTabla = styled.h3`
  margin-bottom: 0px;
  margin-top: 0px;
`
export const SubtituloTabla = styled.h5`
  margin-top: 5px;
  margin-bottom: 14px;
`
export const ContenidoTabla = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 8px;
`
export const ContenedorBoton = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
  ${({ hasCharacter }) => hasCharacter && css` justify-content: flex-end; `}
`
export const ContenedorHistorial = styled.div`
  margin-top: 25px;
`
export const TituloHistorial = styled.h2 `
  text-align: center;
  color: #170c6b;
  font-weight: bold;
`
export const Historial = styled.div `
  display: flex;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  background-color: #FFF;
  padding: 16px;
  margin-bottom: 10px;

`
export const Info = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ButtonHistory = styled.button`
  border: 1px solid #6259ca;
  background-color: #fff;
  color: #6259ca;
  font-weight: bold;
  border-radius: 4px;
  width: 100px;
  cursor: pointer;
  height:36px;
`
export const ContenedorPrincipal = styled.div `
  margin: 10px 60px;
`
export const ImagenHistory = styled.img`
  width: 60px;
  margin-left: 10px;
  background-color: #fff;

`;
export const NombreHistory = styled.h3`
  margin-left: 16px;
  font-weight: bold;
`
export const DivButtonHistory = styled.div`
  display: flex;
  align-items: center;
`
export const VistaBienvenida = styled.div`
  text-align: center;
  padding: 150px 0px 20px 0px;
  color: #170c6b;
`