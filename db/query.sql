-- Add your code below and execute file in MySQL Shell --
-- SELECT movies.movie_name AS Name , reviews.review AS Review
-- FROM movies
-- JOIN movie_name ON reviews.movie_id = movies.id;
-- ;

SELECT movies.movie_name AS Name , reviews.review AS Review
FROM movies
JOIN reviews ON reviews.movie_id = movies.id
;