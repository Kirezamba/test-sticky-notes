import { Note } from "../../store/types";

export interface EditNoteProps {
  note: Note;
  onConfirm: (note: Note) => void;
}
