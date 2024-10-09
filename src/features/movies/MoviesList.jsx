import { Heading, SimpleGrid } from "@chakra-ui/react";
import { data } from "./data";
import MovieCard from "./MovieCard";
import { MOVIEDB_IMAGES_URL } from "src/common/constants";

function MoviesList() {
  return (
    <>
      <Heading textAlign="center" size="xl" mb={6}>
        Trending Movies
      </Heading>
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MoviesList;
