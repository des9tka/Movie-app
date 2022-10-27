import {posterURL} from "../configs";

const MovieInfoBuilder = ({movie}) => {

    console.log(movie)

    return (
        <div className={"OneMovieWrapBox"}>
            <div className={"OneMovieWrap"}>
                <h3 className={'text'}>{movie?.original_title}</h3>
                <hr/>
                <p className={'text'}>overview - {movie?.overview}</p>
                <hr/>
                <p className={'text'}>status -{movie?.status}</p>
                <hr/>
                <p className={'text'}>budget - {movie?.budget}$</p>
                <hr/>
                <img className={'MoviePage'} src={`${posterURL}/${movie?.poster_path}`} alt={movie?.original_title}/>
            </div>
        </div>
    )
}

export {
    MovieInfoBuilder
}