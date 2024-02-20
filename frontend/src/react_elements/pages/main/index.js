import NotesList from "../../components/allNotes_list"
import useFetch from "../../hooks/useFetch"
import CreateForm from "../../components/create_form";

export default function MainPage(){
    const {notesList} = useFetch('http://localhost:8080/all-notes');
    return(
        <div className="main-wrapper flex flex-wrap h-full">
            {notesList && <NotesList list={notesList}/>}
            {notesList && <CreateForm />}
        </div>
    )
}