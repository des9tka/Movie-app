import {posterURL} from "../../configs";

const MovieInfoBuilder = ({movie}) => {

    return (
        <div className={"OneMovieWrapBox"}>
            <div className={"OneMovieWrap"}>
                <h3 className={'text'}>{movie?.original_title}</h3>
                <hr/>
                <p className={'text'}>OVERVIEW: {movie?.overview}</p>
                <hr/>
                <p className={'text'}>STATUS: {movie?.status}</p>
                <hr/>
                <div className={'text genres'}>GENRES: {movie?.genres.map(genre => <p>{genre.name}</p>)}</div>
                <hr/>
                <p className={'text'}>BUDGET - {movie?.budget}$</p>
                <hr/>
                <img className={'MoviePage'} src={`${posterURL}/${movie?.poster_path}`} alt={movie?.original_title}/>
            </div>
        </div>
    )
}

export {
    MovieInfoBuilder
}