import styled from "styled-components";
import { Button, Container, centralize } from "../../styles/Globals";

export const WordContainer = styled.div`
  margin: 1.5em;
  padding: 1.5em;
  border: 10px solid #0e3806;
  display: flex;
  border-radius: 8px 8px 8px 8px;
  flex-direction: row;
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

export const Title = styled.span``;

export const Text = styled.p``;

export const infos = styled.span`
  ${centralize}
  color: #333;
  font-size: 1.2rem;
  padding: 10px;
  font-weight: bold;
`;

export const Points = styled.span`
  font-weight: bold;
`;

export const Content = styled(Container)`
  padding: 1.5em;
  margin: 1.5em;
`;

export const ButtonGaming = styled(Button)`
  margin-top: 1em;
`;

export const letter = styled.span`
  font-size: 70px;
  line-height: 1.5;
  border: 13px solid #0e3806;
  text-align: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  background: #fff;
  color: #0e3806;
  font-weight: bold;
`;
