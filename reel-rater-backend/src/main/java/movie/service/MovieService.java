package movie.service;

import movie.model.Movie;
import movie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repo;

    public List<Movie> allMovies(){
        return repo.findAll();
    }

    public Optional<Movie> allMovieTitles(){
        return repo.findMovieTitles();
    }

    public Optional<Movie> movieByImdbId(String imdbId){
        return repo.findMovieByImdbId(imdbId);
    }

    public Optional<Movie> movieById(Long id) { return repo.findById(id); }

}
