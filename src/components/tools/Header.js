import {useNavigate} from "react-router-dom";

import {Switcher} from "./Switcher";
import {PageCounter} from "./PageCounter";

const Header = () => {
    let navigate = useNavigate();
    return(
        <div>
            <div className={'Header'}>
                <button className={'hBtn2'} onClick={()=> navigate(`/movies`)}>All movies</button>
                <button className={'hBtn1'} onClick={()=> navigate('/')}>Home</button>
                <Switcher/>
                <span className={'field'}></span>
                <div className={'moon'}><i className="fa-regular fa-moon-stars"></i></div>
                <PageCounter/>
            </div>
        </div>

)
}

export {
    Header
}