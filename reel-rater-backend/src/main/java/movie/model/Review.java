package movie.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "review")
public class Review implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;
    @Column(name = "body")
    private String body;
    @Column(name = "created")
    private LocalDateTime created;
    @Column(name = "updated")
    private LocalDateTime updated;

    public Review() {
        this.id = null;
        this.movie = null;
        this.body = null;
        this.created = null;
        this.updated = null;
    }

    public Review(Long id, Movie movie, String body, LocalDateTime created, LocalDateTime updated){
        this.id = id;
        this.movie = movie;
        this.body = body;
        this.created = created;
        this.updated = updated;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public String getBody() {
        return body;
    }

    public LocalDateTime getUpdated() {
        return updated;
    }

    public void setUpdated(LocalDateTime updated) {
        this.updated = updated;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Review{" +
                "review_id=" + id +
                ", movie_id=" + movie +
                ", body='" + body + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
