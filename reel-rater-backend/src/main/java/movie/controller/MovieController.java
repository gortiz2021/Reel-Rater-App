package movie.controller;

import movie.model.Movie;
import movie.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/ReelRater")
public class MovieController {

    @Autowired
    private MovieService service;

    @GetMapping("/allMovies")
    public ResponseEntity<List<Movie>> getAllMovies(){
        return ResponseEntity.status(200).body(service.allMovies());
    }
    @GetMapping("/movies")
    public Optional<Movie> getAllMovieTitles() {
        return service.allMovieTitles();
    }

//    @GetMapping("/movies/{imdbId}")
//    public Optional<Movie> getMovieByImdbId(@PathVariable String imdbId){
//        return service.movieByImdbId(imdbId);
//    }

    @GetMapping("movies/{movieId}")
    public ResponseEntity<Optional<Movie>> getMovieById(@PathVariable Long movieId) {
        return ResponseEntity.status(200).body(service.movieById(movieId));
    }
}
