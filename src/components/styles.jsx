import styled, { keyframes } from "styled-components";

// MAIN COLORS
//0A1D56
//492E87
//37B5B6
//F2F597

export const AppStyle = styled.div``;

export const GeneratorStyles = styled.div`
  height: 500px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const ImageGeneratorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoImageGeneratorAnimation = keyframes`
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-15px); }
`;

export const LogoImageGeneratorStyles = styled.img`
  width: 130px;
  animation-name: ${LogoImageGeneratorAnimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;

export const LogoImageInputStyles = styled.input`
  width: 400px;
  height: 30px;
  padding: 5px;
  font-size: 20px;
  border: 2px solid #492e87;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const ImageOutputStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderStyles = styled.div`
  padding: 15px;

  color: #f2f597;
  font-size: 20px;
`;

export const Logo = styled.img`
  width: 40px;
`;