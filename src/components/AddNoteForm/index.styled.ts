import styled from "styled-components";

export const NoteFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;

  textarea {
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid lightgrey;
    min-width: 100%;
    max-width: 100%;
    height: 100px;
    padding: 10px;
    outline: none;
  }

  button {
    width: 100%;
    background-color: #7392b7;
    cursor: pointer;
    padding: 10px;
    border: 0;
    outline: none;
    color: white;
    &:hover {
      background-color: #b3c5d7;
    }
  }
`;
