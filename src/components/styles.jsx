import styled, { keyframes } from "styled-components";

// ANIMATIONS

const LogoImageGeneratorAnimation = keyframes`
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-15px); }
`;

const VisibleTextAnimation = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

const InvisibleTextAnimation = keyframes`
0% { opacity: 1; }
100% { opacity: 0; display: none; }
`;

const sh02 = keyframes`
from {
  opacity: 0;
  left: 0%;
}

50% {
  opacity: 1;
}

to {
  opacity: 0;
  left: 100%;
}
`;

// STYLES

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

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  button {
    position: relative;
    padding: 10px 20px;
    border-radius: 7px;
    height: 100%;
    border: 1px solid rgb(61, 106, 255);
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  button:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    -webkit-animation: ${sh02} 0.5s 0s linear;
    -moz-animation: ${sh02} 0.5s 0s linear;
    animation: ${sh02} 0.5s 0s linear;
  }

  button::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease-in;
    -moz-transition: box-shadow 0.2s ease-in;
    transition: box-shadow 0.2s ease-in;
  }
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

export const GenerationResultStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    position: relative;
    padding: 10px 20px;
    width: 200px;
    border-radius: 7px;
    border: 1px solid rgb(61, 106, 255);
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  button:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    -webkit-animation: ${sh02} 0.5s 0s linear;
    -moz-animation: ${sh02} 0.5s 0s linear;
    animation: ${sh02} 0.5s 0s linear;
  }

  button::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease-in;
    -moz-transition: box-shadow 0.2s ease-in;
    transition: box-shadow 0.2s ease-in;
  }
`;

export const NoImageOutputStyles = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    border-width: 10px;
    border-style: solid;
    border-image: linear-gradient(to right, darkblue, darkorchid) 1;

    color: white;

    p {
      font-size: 50px;
      font-family: "Dosis", sans-serif;
      font-weight: 500;
    }
  }
`;

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 40px;

  font-size: 20px;
`;

export const Logo = styled.img`
  width: 40px;
`;

export const NavBar = styled.nav`
  li {
    display: inline;
  }

  li a {
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    padding: 14px 16px;
    margin-right: 5px;

    transition: all 0.5s;
  }

  li a:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  li:hover::before {
    -webkit-animation: ${sh02} 0.5s 0s linear;
    -moz-animation: ${sh02} 0.5s 0s linear;
    animation: ${sh02} 0.5s 0s linear;
  }
`;

export const AboutAIStyles = styled.div`
  color: #fff;

  .info_1 {
    position: absolute;
    display: none;
    top: 50%;
    transform: translateY(-80%);
    right: 100px;
  }

  .info_2 {
    position: absolute;
    display: none;
    top: 50%;
    transform: translateY(-80%);
    left: 450px;
  }

  .info_3 {
    position: absolute;
    display: none;
    top: 50%;
    transform: translateY(-80%);
    right: 100px;
  }

  .visible {
    display: block;
    animation-name: ${VisibleTextAnimation};
    animation-duration: 1s;
  }

  .invisible {
    animation-name: ${InvisibleTextAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`;

export const WhatIsAIStyles = styled.div`
  width: 500px;
  font-size: 20px;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
`;

export const HowItWorksStyles = styled.div`
  width: 500px;
  font-size: 20px;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
`;

export const OtherProjectsStyles = styled.div`
  width: 500px;
  font-size: 50px;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;

  width: 350px;

  button {
    position: relative;
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid rgb(61, 106, 255);
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  button:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    -webkit-animation: ${sh02} 0.5s 0s linear;
    -moz-animation: ${sh02} 0.5s 0s linear;
    animation: ${sh02} 0.5s 0s linear;
  }

  button::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease-in;
    -moz-transition: box-shadow 0.2s ease-in;
    transition: box-shadow 0.2s ease-in;
  }
`;
