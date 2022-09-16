import React from "react";
import { NoteFormStyled } from "./index.styled";
import { AddNoteFormProps } from "./types";

const AddNoteForm: React.FC<AddNoteFormProps> = ({
  onAddNote,
  onChangeText,
  noteInput,
}): React.ReactElement => {
  return (
    <NoteFormStyled onSubmit={e => onAddNote(e)}>
      <textarea
        placeholder='Create a new note...'
        value={noteInput}
        onChange={e => onChangeText(e)}
      ></textarea>
      <button>Add</button>
    </NoteFormStyled>
  );
};

export default AddNoteForm;
