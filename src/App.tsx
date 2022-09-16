import React, { DragEventHandler, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { AppStyled } from "./App.styled";
import background from "./assets/background.jpg";
import { AddNoteForm, NoteItem } from "./components";
import { NOTES_LOCAL_STORAGE_KEY } from "./constants";
import { EnumNotesActionTypes } from "./store/actionTypes";
import { initialNotesState } from "./store/initialState";
import { notesReducer } from "./store/notesReducer";
import { Note } from "./store/types";

function App() {
  const [notesState, dispatch] = React.useReducer(notesReducer, initialNotesState);
  const [noteInput, setNoteInput] = useState<string>("");
  const [editableNote, setEditableNote] = useState<string>("");

  React.useEffect(() => {
    localStorage.removeItem(NOTES_LOCAL_STORAGE_KEY);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(notesState.notes));
  }, [notesState]);

  const dragOver: DragEventHandler = event => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleDropNote = React.useCallback((event: React.DragEvent<HTMLDivElement>, note: Note) => {
    const target = event.target as HTMLDivElement;
    if (target) {
      target.style.left = `${event.pageX - 50}px`;
      target.style.top = `${event.pageY - 50}px`;
      dispatch({
        type: EnumNotesActionTypes.EDIT_NOTE,
        payload: { ...note, coords: { x: event.pageX - 50, y: event.pageY - 50 } },
      });
    }
  }, []);

  const handleDeleteNote = React.useCallback(
    (note: Note) => dispatch({ type: EnumNotesActionTypes.DELETE_NOTE, payload: note }),
    []
  );

  const handleChangeInput = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => setNoteInput(event.target.value),
    []
  );

  const handleAddNote = (event: FormEvent) => {
    event.preventDefault();
    if (!noteInput) {
      return;
    }

    const newNote: Note = {
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20),
    };

    dispatch({ type: EnumNotesActionTypes.ADD_NOTE, payload: newNote });
    setNoteInput("");
  };

  const handleClickEditNote = (id: string) => {
    setEditableNote(id);
  };

  const handleConfirmNewText = (note: Note) => {
    setEditableNote("");
    dispatch({
      type: EnumNotesActionTypes.EDIT_NOTE,
      payload: note,
    });
  };

  return (
    <AppStyled style={{ backgroundImage: `url(${background})` }} onDragOver={dragOver}>
      <h1>Create sticky note!</h1>

      <AddNoteForm
        noteInput={noteInput}
        onAddNote={handleAddNote}
        onChangeText={handleChangeInput}
      />

      {notesState.notes.length > 0 &&
        notesState.notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            canEdit={editableNote === note.id}
            onDeleteNote={handleDeleteNote}
            onDropNote={handleDropNote}
            onEditNote={handleClickEditNote}
            onConfirmNewText={handleConfirmNewText}
          />
        ))}
    </AppStyled>
  );
}

export default App;
