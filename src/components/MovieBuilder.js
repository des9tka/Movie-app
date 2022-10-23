import {useNavigate} from "react-router-dom";

import {posterURL} from "../configs";


const MovieBuilder = ({movie}) => {
    const navigate = useNavigate();

    return (
        <div className={'MovieCard'}>
            <h3>
                {movie.id}
                <hr/>
                {movie.original_title}
            </h3>
            <div>
                <img src={`${posterURL}${movie.poster_path}`} alt={`${movie.original_title}`}/>
            </div>
            <div>
                <button className={'movieInfoBtn'} onClick={() => navigate(`/movie-details/${movie.id}`)}>More info</button>
            </div>
        </div>
    )
}

export {
    MovieBuilder
}