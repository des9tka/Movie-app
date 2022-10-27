import {Header, MoviesListCard, MovieSearch} from "../components";
import {GenresList} from "../components/GenresList";
import {useState} from "react";

const MoviesPage = () => {
    const [showMovie, setShowMovie] = useState(1)
    const [showCheckBox, setShowCheckBox] =useState(null)
    const [showSearch, setShowSearch] = useState(null)

    const [page, setPage] = useState('FILTER')


    const show = () => {
        if (showMovie === 1) {
            setShowCheckBox(1)
            setShowMovie(null)
            setShowSearch(null)
            setPage("SEARCH")
        } else if (showCheckBox === 1) {
            setShowCheckBox(null)
            setShowMovie(null)
            setShowSearch(1)
            setPage("MOVIES")
        } else if (showSearch === 1) {
            setShowCheckBox(null)
            setShowMovie(1)
            setShowSearch(null)
            setPage("FILTER")
        }
    }

    return (
        <div>
            <div className={'Span'}></div>
            <Header/>
            <button className={'SwitchPageBtn'} onClick={() => show()}>{page}</button>
            {showSearch && <MovieSearch/>}
            {showCheckBox && <GenresList/>}
            {showMovie && <MoviesListCard/>}
        </div>
    )
}

export {
    MoviesPage
}