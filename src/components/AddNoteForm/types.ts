import { FormEvent } from "react";

export interface AddNoteFormProps {
  noteInput: string;
  onAddNote: (event: FormEvent) => void;
  onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
