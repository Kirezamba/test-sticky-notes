import React from "react";
import { ButtonStyled, TextAreaStyled } from "./index.styled";
import { EditNoteProps } from "./types";

const EditNote: React.FC<EditNoteProps> = ({ note, onConfirm }): React.ReactElement => {
  const [newText, setNewText] = React.useState(note.text);

  const handleChangeNewText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(event.target.value);
  };

  return (
    <>
      <TextAreaStyled onChange={e => handleChangeNewText(e)}>{newText}</TextAreaStyled>
      <ButtonStyled onClick={() => onConfirm({ ...note, text: newText })}>Confirm</ButtonStyled>
    </>
  );
};

export default EditNote;
