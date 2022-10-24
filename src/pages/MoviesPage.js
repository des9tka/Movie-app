import {Header, MoviesListCard} from "../components";
import {GenresList} from "../components/GenresList";
import {useState} from "react";
import {MovieSearch} from "../components/MovieSearch";

const MoviesPage = () => {
    const [showCheckBox, setShowCheckBox] =useState(null)
    const [showMovie, setShowMovie] = useState(1)
    const [page, setPage] = useState('FILTER')


    const show = () => {
        if (showCheckBox === null) {
            setShowCheckBox(1)
            setShowMovie(null)
            setPage("MOVIES")
        } else if (showCheckBox === 1) {
            setShowCheckBox(null)
            setShowMovie(1)
            setPage("FILTER")
        }
    }

    return (
        <div>
            <div className={'Span'}></div>
            <Header/>
            {showCheckBox && <GenresList/>}
            <button className={'SwitchPageBtn'} onClick={() => show()}>{page}</button>
            {showMovie && <MoviesListCard/>}
            <MovieSearch/>
        </div>
    )
}

export {
    MoviesPage
}