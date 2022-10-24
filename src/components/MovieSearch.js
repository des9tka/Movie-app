import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findMovie} from "../reduxStore";


const MovieSearch = () => {
    const dispatch = useDispatch();
    const [find, setFind] = useState("");
    const {findMovies} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(findMovie({find}))
    }, [find])
    return (
        <div>
            <input placeholder="search the movie..." onChange={(e) => setFind(e.target.value)}/>
            {JSON.stringify(findMovies)}
        </div>
    )
}

export {
    MovieSearch
}