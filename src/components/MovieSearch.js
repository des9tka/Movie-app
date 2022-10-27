import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findMovie, DELETE_FINDMOVIE} from "../reduxStore";
import {MovieBuilder} from "./MovieBuilder";


const MovieSearch = () => {
    const dispatch = useDispatch();
    const [find, setFind] = useState("");
    const {findMovies} = useSelector(state => state.movies);

    console.log(findMovies)

    const movies = findMovies.results

    useEffect(() => {
        dispatch(findMovie({find}))
    }, [find])

    const deleteAllFindMovies = () => {
        dispatch(DELETE_FINDMOVIE())
    }

    return (
        <div>
            <div className={'searchWrap'}>
                <input  className={'searchInput'} placeholder="search the movie..." onChange={(e) => {
                    setFind(e.target.value)
                    deleteAllFindMovies()
                }}/>
            </div>
            <div className={"MovieSearch"}>
                {movies && movies.map((movie, index) => <MovieBuilder movie={movie} key={index}/>)}
            </div>
        </div>
    )
}

export {
    MovieSearch
}