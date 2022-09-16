import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid lightgrey;
  margin-top: 45px;
  transform: rotate(-2deg);
  min-width: 100%;
  max-width: 100%;
  height: 100px;
  padding: 10px;
  outline: none;
`;
export const ButtonStyled = styled.button`
  width: 100%;
  background-color: #7392b7;
  cursor: pointer;
  margin-left: 3px;
  transform: rotate(-2deg);
  padding: 10px;
  border: 0;
  outline: none;
  color: white;
  &:hover {
    background-color: #b3c5d7;
  }
`;
