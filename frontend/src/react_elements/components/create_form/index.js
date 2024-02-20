import {useState} from "react"
import { useNotesContext } from "../../hooks/useNotesContext";

const CreateForm = () => {
    const [author,setAuthor] = useState('');
    const [content,setContent] = useState('');
    const [error,setError] = useState(false);
    const {dispatch} = useNotesContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
            try{
                if(author.length > 0 && content.length > 0){
                    const response = await fetch("http://localhost:8080/all-notes",{
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify({author,content}),
                });
                dispatch({type:"ADD_NOTE",payload:await response.json()});
                setError(false);
                console.log("Note created!")
            } else {
                setError(true);
                throw Error("Form cant be empty!");
            }
        } catch(err){
            console.log(err);
        }
    }

    return(
    <div className="create-wrapper w-1/4 flex flex-wrap content-start p-4 h-full shadow" >
        <h1 className="text-3xl w-full text-center mb-6"> Create Form </h1>
        <form className="create-form flex flex-wrap w-full h-full content-start justify-center" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Author" value={author} className="create-input rounded-xl p-3 w-full m-3 border-2 border-yellow-300"
             onChange={(e) => setAuthor(e.target.value)} />
            <textarea placeholder="Content" value={content} className="create-input resize-none rounded-xl p-3 w-full h-1/3 m-3 border-2 border-yellow-300"
             onChange={(e) => setContent(e.target.value)} />
            <button className="rounded-3xl bg-yellow-400 hover:bg-yellow-300 px-12 py-4 text-white">Create</button>
            {error && <div className="empty-error bg-red-400 text-white text-center rounded-lg p-4 w-full m-6 transition-all transition-1000 ">
                Empty field(s)
            </div>}
        </form>
    </div>
    )
}

export default CreateForm