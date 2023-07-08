drop database if exists movie_review_app_db;
create database movie_review_app_db;
use movie_review_app_db;

drop table if exists Movie;
create table Movie (
	id int primary key auto_increment,
    imdb_id varchar(50), 
    title varchar(50),
    release_date date,
    trailer_link varchar(50),
    poster varchar(50), 
    genres varchar(255),
    backdrops varchar(255),
    review_ids varchar(255)
);

insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt6791350", "Guardians of the Galaxy Vol. 3", "2023-05-05", "https://www.youtube.com/watch?v=u3V5KDHRQvk", null, "Action, Adventure, Comedy", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt10366206", "John Wick: Chapter 4", "2023-04-24", "https://www.youtube.com/watch?v=qEVUtrk8_B4", null, "Action, Crime, Thriller", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt5433140", "Fast X", "2023-05-19", "https://www.youtube.com/watch?v=32RAq6JzY-w", null, "Action, Adventure, Crime", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt6718170", "The Super Mario Bros. Movie", "2023-04-05", "https://www.youtube.com/watch?v=TnGl01FkMMo", null, "Animation, Adventure, Comedy", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt9362722", "Spider-Man: Across the Spider-Verse", "2023-06-02", "https://www.youtube.com/watch?v=cqGjhVJWtEg", null, "Animation, Action, Adventure", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt5090568", "Transformers: Rise of the Beasts", "2023-06-09", "https://www.youtube.com/watch?v=itnqEauWQZM", null, "Action, Adventure, Sci-Fi", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt0439572", "The Flash", "2023-06-16", "https://www.youtube.com/watch?v=hebWYacbdvc", null, "Action, Adventure, Comedy", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt16419074", "Air", "2023-04-05", "https://www.youtube.com/watch?v=Euy4Yu6B3nU", null, "Drama, Sport", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt13345606", "Evil Dead Rise", "2023-04-21", "https://www.youtube.com/watch?v=smTK_AeAPHs", null, "Horror", null, null);
insert into Movie(imdb_id, title, releaseDate, trailerLink, poster, genres, backdrops, reviewIds) 
	values ("tt5971474", "The Little Mermaid", "2023-05-26", "https://www.youtube.com/watch?v=kpGo2_d3oYE", null, "Adventure, Family, Fantasy", null, null);

select * from Movie;
select title from Movie;

drop table if exists Review;
create table Review (
	id int primary key auto_increment,
    body varchar(255),
    created datetime,
    updated datetime
);

-- insert into Review(body, created, updated) values();

-- drop table if exists Movie_Review;
-- create table Movie_Review (
-- 	movie_id long,
--     review_id long, 
--     foreign key (movie_id) references Movie(id),
--     foreign key (review_id) references Review(id)
-- );