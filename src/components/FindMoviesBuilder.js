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

    let uniqueMovies = [...new Set(allFindMovies)];

    return (
        <div>
            {uniqueMovies.map(movie => <FindMovieBuilder movie={movie.data}/>)}
        </div>
    )
}

export {
    FindMoviesBuilder
}