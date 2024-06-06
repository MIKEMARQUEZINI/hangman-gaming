import styled from "styled-components";
import { Button, Container, centralize } from "../../styles/Globals";

const BoldText = styled.span`
  font-weight: bold;
`;

const Square = styled.span`
  font-size: 50px;
  line-height: 1.5;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #0e3806;
  background: #fff;
  font-weight: bold;
`;

const ContainerWithMarginAndPadding = styled(Container)`
  padding: 1.5em;
  margin: 1.5em;
`;

export const WordContainer = styled(ContainerWithMarginAndPadding)`
  border: 10px solid #0e3806;
  display: flex;
  border-radius: 8px 8px 8px 8px;
`;

export const LetterContainer = styled.form`
  ${centralize}
`;

export const Input = styled.input`
  height: 50px;
  width: 50px;
  font-size: 2em;
  text-align: center;
  margin-right: 1em;
`;

export const Title = BoldText;

export const Text = styled.p``;

export const infos = styled(BoldText)`
  ${centralize}
  color: #333;
  font-size: 1.2rem;
  padding: 10px;
`;

export const Points = BoldText;

export const Content = ContainerWithMarginAndPadding;

export const ButtonGaming = styled(Button)`
  margin-top: 1em;
`;

export const letter = styled(Square)`
  border: 13px solid #0e3806;
  text-transform: uppercase;
`;

export const EmptySquare = styled(Square)`
  border: 2px solid #0e3806;
  width: 1%;
  height: 1%;
`;
