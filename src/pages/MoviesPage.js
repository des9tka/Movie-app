import {Header, MoviesListCard, MovieSearch} from "../components";
import {GenresList} from "../components/GenresList";
import {useState} from "react";

const MoviesPage = () => {
    const [showMovie, setShowMovie] = useState(1)
    const [showCheckBox, setShowCheckBox] =useState(null)
    const [search, setSearch] = useState(null)

    const [page, setPage] = useState('FILTER')


    const show = () => {
        if (showCheckBox == null && search == null) {
            setShowCheckBox(1)
            setShowMovie(null)
            setSearch(null)
            setPage("MOVIES")
        } else if (showMovie == null && search == null) {
            setShowCheckBox(null)
            setShowMovie(1)
            setSearch(null)
            setPage("FILTER")
        } else if (search == null && showCheckBox == null) {
            setShowCheckBox(null)
            setShowMovie(null)
            setSearch(1)
            setPage("Search")
        }
    }

    return (
        <div>
            <div className={'Span'}></div>
            <Header/>
            <button className={'SwitchPageBtn'} onClick={() => show()}>{page}</button>

            {search && <MovieSearch/>}
            {showCheckBox && <GenresList/>}
            {showMovie && <MoviesListCard/>}
        </div>
    )
}

export {
    MoviesPage
}