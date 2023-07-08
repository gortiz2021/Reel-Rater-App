package movie.repository;

import movie.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    @Query(value="select title from Movie;", nativeQuery=true)
    Optional<Movie> findMovieTitles();

    Optional<Movie> findMovieByImdbId(String imdbId);
}
