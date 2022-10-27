import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {showGenres} from "../../reduxStore";
import {GenreCheckBox} from "./GenreCheckBox";
import {MovieBuilder} from "../movies/MovieBuilder";

const GenresList = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);
    const {filtMovies} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(showGenres())
    }, [])

    return (
        <div className={'GenresWrap'}>
            <div className={'GenresList'}>
                {genres.map(genre => <GenreCheckBox genre={genre} key={genre.id}/>)}
            </div>
            <div className={"FilteredMovie"}>
                {filtMovies.map((movie, index) => <MovieBuilder movie={movie} key={index}/>)}
            </div>
        </div>
    )
}

export {
    GenresList
}