import { NOTES_LOCAL_STORAGE_KEY } from "../constants";
import { NotesStoreState } from "./types";

export const initialNotesState: NotesStoreState = {
  notes: localStorage.getItem(NOTES_LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(NOTES_LOCAL_STORAGE_KEY) || "")
    : [],
};
