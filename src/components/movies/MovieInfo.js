import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {showMovie} from "../../reduxStore";
import {MovieInfoBuilder} from "./MovieInfoBuilder";


const MovieInfo = () => {
    const {movie} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const params = useParams();

    const id = params.id

    useEffect(() => {
        dispatch(showMovie({id}))
    }, [id]);

    return (
        <div>
            {<MovieInfoBuilder movie={movie}/>}
        </div>
    )
}

export {
    MovieInfo
}