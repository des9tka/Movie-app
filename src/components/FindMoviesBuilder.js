import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {showFindMovie} from "../reduxStore";
import {FindMovieBuilder} from "./FindMovieBuilder";

const FindMoviesBuilder = ({id, find}) => {
    const {allFindMovies,findMovies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showFindMovie({id, find}))
        console.log(findMovies)
},[])

    return (
        <div>
            {allFindMovies.map(movie => <FindMovieBuilder movie={movie}/>)}
        </div>
    )
}

export {
    FindMoviesBuilder
}