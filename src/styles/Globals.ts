import styled, { createGlobalStyle } from "styled-components";
import backgroundHangman from "../assets/background-hangmanv2.jpg";

export const GlobalStyle = createGlobalStyle`
  body {    
    margin: 0;
    height: 100%;
    padding: 0;
    background: url(${backgroundHangman}) no-repeat center center fixed;
    background-size: 100% 100%;
    font-family: "Lucida Console", "Courier New", monospace;
}`;

export const Button = styled.button`
  border-radius: 9999px;
  padding: 1rem 2rem;
  font-weight: bold;
  background: none;
  position: relative;
  border: 0.25rem solid;
  color: inherit;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    color: #f3f7ec;
  }

  &::before {
    content: "-";
    color: #db7d55;
    font-size: 4rem;
    padding-left: 0.5rem;
    position: absolute;
    inset: 0;
    transform: translateX(0.75rem) translateY(0.5rem) rotateZ(-3deg)
      skewX(-10deg);
    background-color: #db7d55;
    z-index: -2;
    border-radius: 1.4rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 2.25rem;
    border-top-left-radius: 1.25rem;
    transition: 250ms;
    border: 5rem solid #db7d55;
    border-top: 0 solid transparent;
    border-left: 0 solid transparent;
  }

  &:hover::before {
    color: #006989;
    border-radius: 1.4rem;
    border-color: #006989;
    background-color: #006989;
  }
`;

export const Centralize = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  ${Centralize}
  font-size: 2rem;
  color: #000;
  text-shadow: 2px 1px 2px #777;
  font-family: "Lucida Console", "Courier New", monospace;
`;

export const Text = styled.p`
  ${Centralize}
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding: 10px;
  color: #000;
  text-shadow: 2px 1px 2px #000;
  font-family: "Lucida Console", "Courier New", monospace;
`;
