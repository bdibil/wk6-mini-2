const movies = require('express').Router();

// get the client
const mysql = require('mysql2');

// create the connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'movie_db'
});


// GET Route for retrieving all the movies
movies.get('/', (req, res) => {
  res.send('<p>get received for movies USING router</p>')
  // res.status
});  



// // GET Route for retrieving all the movies
// movies.get('/', (req, res) => {
//   res.send('get received for movies list')
// });  




// // simple query
// connection.query(
//   'SELECT movies.movie_name AS Name , reviews.review AS Review FROM movies JOIN reviews ON reviews.movie_id = movies.id',
//     function (err, results, fields) {
//       if(err){
//         throw err
//       }
//       console.log(typeof(results)); // results contains rows returned by server
//       res.json(results)
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );






module.exports = movies;
