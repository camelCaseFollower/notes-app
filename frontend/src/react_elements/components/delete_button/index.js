import { useNotesContext } from "../../hooks/useNotesContext";

const DeleteButton = ({id}) => {
    const {notesList,dispatch} = useNotesContext();

    const handleDelete = async (passed_id) => {
        try{
            const response = await fetch(`http://localhost:8080/all-notes/${passed_id}`,{
                method:"DELETE",
            });
            dispatch({type:"REMOVE_NOTE",payload:passed_id})
            console.log("Deleted note")
        } catch(err){
            console.log(err);
        }
    }
    return(
        <button onClick={() => handleDelete(id)} className="rounded-3xl bg-gray-300 hover:bg-gray-400 text-white py-3 px-8">Delete</button>
    )
}

export default DeleteButton