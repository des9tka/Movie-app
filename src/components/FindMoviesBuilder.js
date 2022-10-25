import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {showFindMovie} from "../reduxStore";
import {FindMovieBuilder} from "./FindMovieBuilder";

const FindMoviesBuilder = ({id}) => {
    const {allFindMovies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showFindMovie({id}))
    },[])

    console.log(allFindMovies)
    let movie = [];

    for (let i in allFindMovies) {
        if (movie.includes(i)) {
            return movie;
        } else {
            movie.push(i)
        }
    }
    console.log(movie)


    return (
        <div>
            {movie.map(movie => <FindMovieBuilder movie={movie.data}/>)}
        </div>
    )
}

export {
    FindMoviesBuilder
}