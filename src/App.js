import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainPage, MovieDetailsPage, MoviesPage} from "./pages";
import {MovieInfo} from "./components";

function App() {
  return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={`/movies`} element={<MoviesPage/>}/>
            <Route path={'/movie-details/:id'} element={<MovieInfo/>}/>
            <Route path={'/movie-details'} element={<MovieDetailsPage/>}/>
        </Routes>
  );
}

export default App;
