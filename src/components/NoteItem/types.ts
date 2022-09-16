import { Note } from "../../store/types";

export interface NoteProps {
  note: Note;
  canEdit: boolean;
  onDropNote: (event: React.DragEvent<HTMLDivElement>, note: Note) => void;
  onDeleteNote: (note: Note) => void;
  onEditNote: (id: string) => void;
  onConfirmNewText: (note: Note) => void;
}
