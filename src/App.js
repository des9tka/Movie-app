import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainPage, MoviesPage} from "./pages";
import {MovieInfo} from "./components";

function App() {
  return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={`/movies`} element={<MoviesPage/>}/>
            <Route path={'/movie-details/:id'} element={<MovieInfo/>}/>
        </Routes>
  );
}

export default App;