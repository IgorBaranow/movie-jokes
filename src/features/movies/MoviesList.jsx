import { Link } from "react-router-dom";

function MoviesList() {
  return (
    <div>
      MoviesList
      <Link to={"/movies/dsds"}>Go to movie</Link>
    </div>
  );
}

export default MoviesList;
