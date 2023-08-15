package movie.controller;

import movie.model.Movie;
import movie.model.Review;
import movie.model.ReviewRequest;
import movie.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/ReelRater")
public class ReviewController {

    @Autowired
    private ReviewService service;

    @PostMapping("/reviews/{movie}")
    public ResponseEntity<Review> createReview(@PathVariable Movie movie, @RequestBody ReviewRequest request) {
        // Get the review body from the request object
        String body = request.getBody();

        // Call the service method to create a review using the provided movie_id and body
        Review review = service.createReview(movie, body);

        // Return the created review in the response with HttpStatus.CREATED
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return ResponseEntity.status(200).body(service.allReviews());
    }

    @GetMapping("/reviews/movie/{movie_id}")
    public ResponseEntity<List<Review>> getReviewsByMovieId(@PathVariable Long movie_id){
        List<Review> reviews = service.allReviewsByMovieId(movie_id);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

}
