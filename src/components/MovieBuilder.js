import {useNavigate} from "react-router-dom";
import StarRatings from 'react-star-ratings';

import {posterURL} from "../configs";


const MovieBuilder = ({movie}) => {
    const navigate = useNavigate();

    let adult = 'red';

    if (movie.adult === false) {
        adult = 'green'
    } else if ((movie.adult === true)) {
        adult = 'red';
    }

    return (
        <div className={'MovieCard'}>
            <div className={'Adult'}>
                <div className={`${adult}`}></div>
            </div>
            <h3>
                {movie.id}
                <hr/>
                <p className={'cardText'}>{movie.original_title}</p>
            </h3>
            <div className={'image'}>
                <img src={`${posterURL}${movie.poster_path}`} alt={`${movie.original_title}`}/>
            </div>
            <StarRatings
                numberOfStars={5}
                starRatedColor=""
                rating={movie.vote_average/10*5}
                starDimension="20px"
                starSpacing="10px"
            />
            <div>
                <button className={'movieInfoBtn'} onClick={() => navigate(`/movie-details/${movie.id}`)}>More info</button>
            </div>
        </div>
    )
}

export {
    MovieBuilder
}