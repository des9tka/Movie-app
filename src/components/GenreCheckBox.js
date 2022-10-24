import {useDispatch, useSelector} from "react-redux";
import {DELETE_FILTMOVIES, SET_FILTMOVIES} from "../reduxStore";

let status = false;

const GenreCheckBox = ({genre}) => {
    const {movies, filtMovies} = useSelector(state => state.movies);
    const dispatch = useDispatch();


    const chkBoxFunc = (id) => {
        movies.map(movie => {
            if (movie.genre_ids.includes(id) && !filtMovies.includes(movie)) {
                dispatch(SET_FILTMOVIES({movie}))
            } else if (movie.genre_ids.includes(id) && filtMovies.includes(movie)) {
                dispatch(DELETE_FILTMOVIES({movie}))
            }
        })
    }

    return (
        <div className={'GenreCheckBox'}>
            <input className={'GenreCheckBox'} id={'GenreCheckBox'} type={"checkbox"} value={'passive'} onChange={() => chkBoxFunc(genre.id)}/>{genre.name}
        </div>
    )
}

export {
    GenreCheckBox,
    status
}