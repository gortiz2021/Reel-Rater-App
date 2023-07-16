package movie.controller;

import movie.model.Movie;
import movie.model.Review;
import movie.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/v1/ReelRater")
public class ReviewController {

    @Autowired
    private ReviewService service;

    @PostMapping("/reviews/{movie_id}")
    public ResponseEntity<Review> createReview(@PathVariable Movie movie_id, @RequestBody String body) {
        // Call the service method to create a review using the provided movie_id and body
        Review review = service.createReview(movie_id, body);

        // Return the created review in the response with HttpStatus.CREATED
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return ResponseEntity.status(200).body(service.allReviews());
    }

}
