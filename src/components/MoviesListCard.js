import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CHANGE_PAGE, showMovies} from "../reduxStore";
import {MovieBuilder} from "./MovieBuilder";

const MoviesListCard = () => {
    const dispatch = useDispatch();
    const {movies, page, pages} = useSelector(state => state.movies);


    useEffect(() => {
        dispatch(showMovies({page}))
    }, [page]);

    function nextPage() {
        dispatch(CHANGE_PAGE(+1))
    }

    function prevPage() {
        dispatch(CHANGE_PAGE(-1))
    }
    return (
        <div>
            <div className={'BtnWrap'}>
                <button className={'firstBtn'} disabled={page === 1} onClick={() => prevPage()}>Prev page</button>
                <button className={'secondBtn'}disabled={pages === pages+1 } onClick={() => nextPage()}>Next page</button>
            </div>
            <div className={'MoviesWrap'}>
                {movies.map((movie) => <MovieBuilder movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export {
    MoviesListCard
}