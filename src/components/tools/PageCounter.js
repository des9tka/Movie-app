import {useSelector} from "react-redux";

const PageCounter = () => {
    const {page} = useSelector(state => state.movies)
    return (
        <div className={'PAGE'}>
            <h3 className={'PageCounter'}>PAGE : {page}</h3>
        </div>
    )
}

export {
    PageCounter
}