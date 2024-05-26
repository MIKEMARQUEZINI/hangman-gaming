import styled from "styled-components";

export const centralize = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
};

export const Container = styled.div`
  ${centralize}
  text-align: center;
`;

export const Button = styled.button`
  background-color: #28580c;
  color: white;
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #173506;
    color: white;
    font-size: large;s
  }
`;

export const Title = styled.h1`
  ${centralize}
  padding: 10px;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

export const Text = styled.p`
  ${centralize}
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding: 10px;
  color: #333;
  font-size: 1.2rem;
`;

export const infos = styled.span`
  ${centralize}
  color: #333;
  font-size: 1.2rem;
  padding: 10px;
  font-weight: bold;
`;
