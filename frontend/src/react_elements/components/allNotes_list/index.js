import DeleteButton from "../delete_button"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

export default function NotesList({list}){
    return(
        <div className="list-wrapper flex flex-wrap content-start justify-start w-3/4 overflow-scroll">
            {list.map(note => (
                <div className="note-card flex grow flex-wrap content-center justify-center shadow rounded-2xl py-8 m-2" key={note._id}>
                    <h3 className="text-center w-full text-lg">Written by {note.author}</h3>
                    <p className="text-center w-full text-lg">{note.content}</p>
                    <p className="text-center w-full text-sm my-3">{formatDistanceToNow(new Date(note.createdAt),{ addSuffix:true})}</p>    
                    <DeleteButton id={note._id} />
                </div>
            ))}
        </div>
    )
}