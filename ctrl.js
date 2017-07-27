const USERS = require("./userData");

module.exports = {

  getAllUsers: function(request, response, next) {
    console.log(request.url);

    if ( request.query.age ) {

      console.log( 'found a query', request.query );
      for (let i = 0; i < USERS.length; i++) {
        if ( USERS[i].age == request.query.age ) {
          console.log('Found User');
          response.status(200).send(USERS[i]);
          return;
        }
      }
      response.status(500).send("User not found")
    } else if ( request.query.name ) {

      console.log( 'found a query', request.query );
      for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].name.toLowerCase() === request.query.name.toLowerCase()) {
          console.log('Found User');
          response.status(200).send(USERS[i]);
        }
      }

    // } // uncommment these four lines to write faveMovies query
    //
    // // create a query for faveMovies
    // else if () {
    //   // write new code here
    } else {

      response.status(200).send(USERS);

    }



  }

};