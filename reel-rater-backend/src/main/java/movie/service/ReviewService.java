package movie.service;

import movie.model.Movie;
import movie.model.Review;
import movie.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository repo;

    public Review createReview(Movie movie_id, String body) {
        Review review = new Review();
        review.setMovie(movie_id);
        review.setBody(body);
        review.setCreated(LocalDateTime.now());
        review.setUpdated(LocalDateTime.now());

        return repo.save(review);
    }

    public List<Review> allReviews(){
        return repo.findAll();
    }
}
