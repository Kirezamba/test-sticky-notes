import { EnumNotesActionTypes } from "./actionTypes";
import { Note, NotesAction, NotesStoreState } from "./types";

export const notesReducer = (prevState: NotesStoreState, action: NotesAction) => {
  switch (action.type) {
    case EnumNotesActionTypes.ADD_NOTE: {
      const newState = {
        notes: [...prevState.notes, action.payload],
      };

      return newState;
    }

    case EnumNotesActionTypes.EDIT_NOTE: {
      const newState = {
        notes: prevState.notes.map(
          (note): Note => (note.id === action.payload.id ? action.payload : note)
        ),
      };
      return newState;
    }

    case EnumNotesActionTypes.DELETE_NOTE: {
      const newState = {
        ...prevState,
        notes: prevState.notes.filter(note => note.id !== action.payload.id),
      };
      return newState;
    }
  }
};
