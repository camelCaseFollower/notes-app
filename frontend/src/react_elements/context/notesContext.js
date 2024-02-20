import { createContext,useReducer } from "react"

export const NotesContext = createContext();

export function NotesContextProvider({children}){

    const notesReducer = (state,action) => {
        switch(action.type){
            case 'SET_NOTES':
                return {
                    notesList:action.payload,
                }
            case 'ADD_NOTE':
                return {
                    notesList:[action.payload, ...state.notesList]
                }
            case 'REMOVE_NOTE':
                //Note that state.notesList is an array of objects and ...state.notesList will spread all objects
                //In REMOVE_NOTE the payload is a string containing the objects id
                const new_notesList = state.notesList.filter(note => note._id !== action.payload)
                return {
                    notesList:[...new_notesList],
                }
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(notesReducer,{
        notesList:null,
    })

    return(
        <NotesContext.Provider value={{...state,dispatch}}>
            { children }
        </NotesContext.Provider>
    )
}