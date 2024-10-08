import { useParams } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams();
  return <div>MovieDetails{movieId}</div>;
}

export default MovieDetails;
