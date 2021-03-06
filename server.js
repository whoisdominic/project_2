//___________________
//Dependencies
//___________________
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const ranker = require("./controllers/ranker.js");
const axios = require("axios").default;
const session = require("express-session");
require('dotenv').config()


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project2";
// Connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});
// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
// open the connection to mongo
db.on("open", () => {});

//////////////////////////
// Models
//////////////////////////

const Artist = require("./models/artistSchema.js");
const User = require("./models/userSchema.js");
const Category = require("./models/categorySchema.js");

//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static("public"));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(
  express.urlencoded({
    extended: false,
  })
); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//////////////////////////
// Sessions
//////////////////////////

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
//////////////////////////
// Controllers
//////////////////////////

const userController = require("./controllers/user_controller.js");
app.use('/user', userController)

////////////////
//Authorization Middleware
////////////////

const authCheck = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  } else {
    res.redirect('/user/login');
  }
};
//////////////////////////
// API
//////////////////////////
// testing branches
//////////////////////////
// Spotify
//////////////////////////
var SpotifyWebApi = require("spotify-web-api-node");

var clientId = process.env.CLIENTID,
  clientSecret = process.env.CLIENTSECRET;

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});


const authTheApp = () => {

  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );
}



authTheApp()
setInterval(authTheApp, 1200000)

//////////////////////////
// Routes
//////////////////////////

app.get("/", (req, res) => {
  res.render("Index", {
    user: req.session.currentUser
  });
});

//////////////////////////
// Search
//////////////////////////

app.get(`/search/:searchParam`, (req, res) => {
  spotifyApi.searchArtists(req.params.searchParam).then(
    function (data) {
      console.log(`Search artists by "${req.params.searchParam}"`, data.body);
      res.render("SearchRes", {
        results: data.body,
        search: req.params.searchParam,
      });
    },
    function (err) {
      console.error(err);
    }
  );
});

app.get("/search", (req, res) => {
  res.render("Search");
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.redirect(`/search/${req.body.search}`);
});

//////////////////////////
// Artist Show
//////////////////////////

app.get("/artist/:id", (req, res) => {
  spotifyApi.getArtist(req.params.id).then(
    function (data) {
      // console.log("Artist information", data.body);

      Artist.find({
          spotifyId: data.body.id,
        },
        (err, foundArtist) => {
          if (foundArtist.length === 1) {
            console.log(`${foundArtist[0].name} already exists in GOAT DB`);
            // need to add update in here
            // find and update using the foundArtist variable
            // push data massaged into the shema
          } else {
            console.log("Creating Artist in our database");
            Artist.create({
                name: data.body.name,
                spotifyId: data.body.id,
                images: data.body.images,
                popularity: data.body.popularity,
                genres: data.body.genres,
                followers: data.body.followers.total,
              },
              (err, createdArtist) => {
                console.log(createdArtist);
                if (err) {
                  console.log(err);
                }
              }
            );
          }
        }
      );

      spotifyApi.getArtistTopTracks(req.params.id, "GB").then(
        function (dataTracks) {
          // console.log("server tracks ", dataTracks.body);

          User.findOne({
            username: req.session.currentUser
          }, (err, foundUser) => {
            if (err) {
              console.log(err);
            } else {

              res.render("Artist", {
                tracks: dataTracks.body,
                results: data.body,
                id: req.params.id,
                currentUser: foundUser

              });
            }
          })
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
    },
    function (err) {
      console.error(err);
    }
  );
});

//////////////////////////
// Categories
//////////////////////////

app.get("/categories/:genre", (req, res) => {
  Category.find({
      name: `${req.params.genre}`,
    },
    (err, genre) => {
      // console.log(genre);
      let display = ranker(genre, 1);
      console.log("hey", display[0]);
      Artist.find({
          spotifyId: display[0].id,
        },
        (err, goat) => {
          // console.log(`the goat is ${goat}`);
          res.render("Category", {
            goatRank: display[0].rank,
            data: genre,
            result: goat,
            category: req.params.genre,
          });
        }
      );
    }
  );
});

app.post("/categories/:genre", authCheck, (req, res) => {
  Category.create({
      name: req.body.name,
      userVotes: {
        artistId: req.body.artistId,
        user_id: req.body.user_id,
      },
    },
    (err, createdCategory) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect(`/categories/${req.params.genre}`);
        console.log(createdCategory);
      }
    }
  );
});

app.get("/categories", (req, res) => {
  res.render("AllCategories", {

  });
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log("Listening on port:", PORT));