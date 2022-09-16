import { EnumNotesActionTypes } from "./actionTypes";

export interface NotesStoreState {
  notes: Note[];
}

export interface Note {
  id: string;
  text: string;
  rotate: number;
  coords?: Coords;
}

export interface Coords {
  x: number;
  y: number;
}

export interface NotesAction {
  type: EnumNotesActionTypes;
  payload: Note;
}
