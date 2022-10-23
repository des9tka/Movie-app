import {Header, UserInfo} from "../components";

const MainPage = () => {
    return (
        <div className={'PageMain'}>
            <Header/>
            <div className={'Main'}>
                <UserInfo/>
            </div>
        </div>
    )
}

export {
    MainPage
}