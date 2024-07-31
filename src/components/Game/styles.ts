import styled from "styled-components";
import { Button, Centralize } from "../../styles/Globals";

const BoldText = styled.span`
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;

  @media (max-width: 768px) {
    margin: 1em 0;
  }
`;

export const WordContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin: 3em 0;

  @media (max-width: 768px) {
    margin: 2em 0;
    gap: 0.3em;
  }
`;

const Square = styled.div`
  font-size: 50px;
  line-height: 1.5;
  text-align: center;
  width: 100px;
  height: 100px;
  color: #0e3806;
  background: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0e3806;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
    width: 70px;
    height: 70px;
    margin: 0.3em;
  }
`;

export const LetterContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  height: 50px;
  width: 50px;
  font-size: 2em;
  text-align: center;
  margin-right: 1em;
  border-radius: 10%;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    font-size: 1.5em;
    margin-right: 0.5em;
  }
`;

export const Header = styled.header`
  color: #000;
  text-shadow: 2px 1px 2px #000;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1em 0;
  }
`;

export const Title = styled.h1`
  color: #000;
  text-shadow: 2px 1px 2px #000;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #000;
  text-shadow: 2px 1px 2px #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Infos = styled.div`
  ${Centralize}
  color: #0e3806;
  text-shadow: 2px 1px 2px #fff;
  font-size: 1.2rem;
  padding: 10px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
  }
`;

export const Points = BoldText;

export const ButtonGaming = styled(Button)`
  margin-top: 1em;

  @media (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export const Letter = styled(Square)`
  text-transform: uppercase;
  border-radius: 25%;
  box-shadow: 0 0 10px #000;
  color: #000;
`;

export const EmptySquare = styled(Square)`
  background: #0e3806;
  margin: 0em;
  border-radius: 20%;
  border: 2px solid #000;
`;

export const Footer = styled.footer`
  ${Centralize}
  width: 100%;
  position: fixed;
  bottom: 0;

  font-size: 1.5rem;
  color: #000;
  text-shadow: 2px 1px 2px #fff;
`;

export const TextFooter = styled.p`
  font-size: 1.5rem;
  color: #000;
  text-shadow: 2px 1px 2px #000;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
