import {useNavigate} from "react-router-dom";
import {Switcher} from "./Switcher";
import {PageCounter} from "./PageCounter";

const Header = () => {
    let navigate = useNavigate();
    return(
        <div className={'Header'}>
            <button className={'hBtn1'} onClick={()=> navigate('/')}>Home</button>
            <button className={'hBtn2'} onClick={()=> navigate(`/movies`)}>All movies</button>
            <Switcher/>
            <span className={'field'}></span>
            <PageCounter/>
            <div className={'moon'}><i className="fa-regular fa-moon-stars"></i></div>
        </div>
    )
}

export {
    Header
}