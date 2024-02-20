import {NotesContext} from "../context/notesContext"
import { useContext } from "react"

export const useNotesContext = () => {
    const our_context = useContext(NotesContext);

    if(!our_context){
        throw Error("You re trying to use context outside its scope");
    };

    return our_context
}