import { useEffect } from "react";
import { useNotesContext } from "./useNotesContext";

const useFetch = (url) => {
    const {notesList,dispatch} = useNotesContext();

    useEffect(() => {
        fetchData(url)
    },[url]);
    
    const fetchData = async (passed_url) => {
        const result = await fetch(passed_url,{ method:"GET"});
        if(!result.ok) {
            console.log("Error fetching data")
        } else {
            const data = await result.json();
            dispatch({type:"SET_NOTES",payload:data});
        }
    }

    return {notesList}
}

export default useFetch;