import styled from "styled-components";

export const TextStyled = styled.pre`
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  width: 100%;
  margin-top: 40px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-y: auto;
`;

export const CloseIconStyled = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 30px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.6);
  }
`;
export const EditIconStyled = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
  right: 35px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.6);
  }
`;

export const NoteStyled = styled.div<{ coords?: { x: number; y: number } }>`
  position: absolute;
  cursor: pointer;
  background-size: cover;
  top: ${({ coords }) => (coords ? `${coords.y}px` : "100px")};
  left: ${({ coords }) => (coords ? `${coords.x}px` : "300px")};
  height: 300px;
  width: 300px;
  padding: 20px;
  z-index: 10;
  overflow: hidden;
`;
