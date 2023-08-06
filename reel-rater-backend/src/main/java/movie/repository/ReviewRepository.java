package movie.repository;

import movie.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query(value = "select * from Review where movie_id = ?1", nativeQuery = true)
    List<Review> findByMovieId_Id(Long movie_id);
}
