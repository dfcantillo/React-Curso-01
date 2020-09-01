import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(resp => setState({
            data: resp,
            loading: false
        }));
      
    }, [])

    


    return state;
}