import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findMovie} from "../reduxStore";
import {FindMoviesBuilder} from "./FindMoviesBuilder";
import {FindMovieBuilder} from "./FindMovieBuilder";


const MovieSearch = () => {
    const dispatch = useDispatch();
    const [find, setFind] = useState("");
    const {findMovies} = useSelector(state => state.movies);

    let movies = findMovies.results;

    console.log(movies)

    useEffect(() => {
        dispatch(findMovie({find}))
    }, [find])
    return (
        <div>
            <input placeholder="search the movie..." onChange={(e) => setFind(e.target.value)}/>
            {/*{movies&&movies.map((movie, index) => <FindMoviesBuilder id={movie.id} find={find} key={index}/>)}*/}

            {/*timeDecision*/}
            {movies&&movies.map(movie => <FindMovieBuilder movie={movie} key={movie.id}/>)}
        </div>
    )
}

export {
    MovieSearch
}