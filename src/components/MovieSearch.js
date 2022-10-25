import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findMovie} from "../reduxStore";
import {FindMoviesBuilder} from "./FindMoviesBuilder";


const MovieSearch = () => {
    const dispatch = useDispatch();
    const [find, setFind] = useState("");
    const {findMovies} = useSelector(state => state.movies);

    let movies = findMovies.results

    useEffect(() => {
        dispatch(findMovie({find}))
    }, [find])
    return (
        <div>
            <input placeholder="search the movie..." onChange={(e) => setFind(e.target.value)}/>
            {movies&&movies.map(movie => <FindMoviesBuilder id={movie.id} key={movie.id}/>)}
        </div>
    )
}

export {
    MovieSearch
}