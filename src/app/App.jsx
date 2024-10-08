import { Route, Routes } from "react-router-dom";
import MovieDetails from "src/features/movies/MovieDetails";
import MoviesList from "src/features/movies/MoviesList";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MoviesList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
