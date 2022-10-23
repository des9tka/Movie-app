import {useNavigate} from "react-router-dom";
import {Switcher} from "./Switcher";

const Header = () => {
    let navigate = useNavigate();
    return(
        <div className={'Header'}>
            <button className={'hBtn1'} onClick={()=> navigate('/')}>Home</button>
            <button className={'hBtn2'} onClick={()=> navigate(`/movies`)}>All movies</button>
            <Switcher/>
        </div>
    )
}

export {
    Header
}