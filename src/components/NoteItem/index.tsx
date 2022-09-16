import React from "react";
import { CloseIconStyled, EditIconStyled, NoteStyled, TextStyled } from "./index.styled";
import { NoteProps } from "./types";
import { EditNote } from "../";
import noteImg from "../../assets/note.png";

const NoteItem = React.memo<NoteProps>(
  ({
    note,
    onDeleteNote,
    onDropNote,
    onEditNote,
    canEdit,
    onConfirmNewText,
  }): React.ReactElement => {
    return (
      <NoteStyled
        coords={note.coords}
        style={{ transform: `rotate(${note.rotate}deg)`, backgroundImage: `url(${noteImg})` }}
        onDragEnd={e => onDropNote(e, note)}
        draggable='true'
        key={note.id}
      >
        <CloseIconStyled onClick={() => onDeleteNote(note)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        </CloseIconStyled>
        <EditIconStyled onClick={() => onEditNote(note.id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
            />
          </svg>
        </EditIconStyled>
        {canEdit && <EditNote onConfirm={onConfirmNewText} note={note} />}
        {!canEdit && <TextStyled>{note.text}</TextStyled>}
      </NoteStyled>
    );
  }
);

export default NoteItem;
