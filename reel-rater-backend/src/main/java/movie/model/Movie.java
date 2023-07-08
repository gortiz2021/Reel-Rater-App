package movie.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
@Entity
@Table(name = "movie")
public class Movie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "imdb_id")
    private String imdbId;
    @Column(name = "title")
    private String title;
    @Column(name = "release_date")
    private Date releaseDate;
    @Column(name = "trailer_link")
    private String trailerLink;
    @Column(name = "poster")
    private String poster;
    @Column(name = "genres")
    private String genres;
    @Column(name = "backdrops")
    private String backdrops;
    @Column(name = "review_ids")
    private String reviewIds;

    public Movie() {
        this.imdbId = null;
        this.title = null;
        this.releaseDate = null;
        this.trailerLink = null;
        this.poster = null;
        this.genres = null;
        this.backdrops = null;
        this.reviewIds = null;
    }

    public Movie(String imdbId, String title, Date releaseDate, String trailerLink, String poster, String backdrops, String genres, String reviewIds){
        this.imdbId = imdbId;
        this.title = title;
        this.releaseDate = releaseDate;
        this.trailerLink = trailerLink;
        this.poster = poster;
        this.backdrops = backdrops;
        this.genres = genres;
        this.reviewIds = reviewIds;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getTrailerLink() {
        return trailerLink;
    }

    public void setTrailerLink(String trailerLink) {
        this.trailerLink = trailerLink;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getBackdrops() {
        return backdrops;
    }

    public void setBackdrops(String backdrops) {
        this.backdrops = backdrops;
    }

    public String getReviewIds() {
        return reviewIds;
    }

    public void setReviewIds(String reviewIds) {
        this.reviewIds = reviewIds;
    }

}
