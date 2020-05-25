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

//////////////////////////
// Controllers
//////////////////////////

// const searchPlayer = require('./controllers/api_controllers.js')

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

const Artist = require('./models/artistSchema.js')
const User = require('./models/userSchema.js')
const Category = require('./models/categorySchema.js')



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
// API
//////////////////////////

//////////////////////////
// Spotify
//////////////////////////

var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "32995d0523ec4bb39a2e39d2fa56ac35",
  clientSecret: "490e51713f024d43b9773eaf68334484",
  redirectUri: "http://localhost:3000/callback",
});

spotifyApi.setAccessToken(
  "BQBa67E8dzqeBcNs44A8-UYNfGBJi7VoTSo9HMSog5XciHxLJanBlHI3QAL9eTXdAcLCfv4_gwAimEbVq2ry4Oj_hVvdK7KSTUXKiNv8koQ3giEdG1irI8PEe6WjlOX_tmO7X3y1--reqKAuDnY9r_2JVbms1BWt42s-eokV-BdS3csRozBB4g"
);

spotifyApi.setRefreshToken(
  "AQBQ82Hh-z_1YkvBG74mTjt-TT8GHy3reNHbX7GYyIIxkNE6LbOeDx-UzZeHCZmnAfNACrkHaBU9qad41fTcKgR0Z_mpnG6v2MZE0mORGqs8yraw4UFR_QaizXkB5Zt773Y"
);



//////////////////////////
// Refresh area
//////////////////////////


//////////////////////////
// Routes
//////////////////////////

app.get("/", (req, res) => {
  res.render("Index");
});

//////////////////////////
// User Routes
//////////////////////////

app.get('/login', (req, res) => {
  res.render('Login')
})


app.get('/signup', (req, res) => {
  res.render('Signup')
})

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

app.get("/spotify", (req, res) => {});

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
        spotifyId: data.body.id
      }, (err, foundArtist) => {
        if (foundArtist.length === 1) {
          console.log(`${foundArtist[0].name} already exists in GOAT DB`);
        } else {
          console.log('wtf is going on');
          Artist.create({
            name: data.body.name,
            spotifyId: data.body.id,
            images: data.body.images,
            popularity: data.body.popularity,
            genres: data.body.genres,
            followers: data.body.followers.total

          }, (err, createdArtist) => {
            console.log(createdArtist);
            if (err) {
              console.log(err)
            }
          })
        }
      })

      spotifyApi.getArtistTopTracks(req.params.id, "GB").then(
        function (dataTracks) {
          // console.log("server tracks ", dataTracks.body);

          res.render("Artist", {
            tracks: dataTracks.body,
            results: data.body,
            id: req.params.id,
          });
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

app.get('/categories/:genre', (req, res) => {
  Category.find({
    name: `${req.params.genre}`
  }, (err, genre) => {
    // console.log(genre);

    Artist.find({
      artistId: ranker(genre, 1)
    }, (err, goat) => {
      // console.log(genre);


      res.render('Category', {
        data: genre,
        result: goat,
        category: req.params.genre
      })




    })





  })
})



app.post('/categories/:genre', (req, res) => {
  Category.create({
    name: req.body.name,
    userVotes: {
      artistId: req.body.artistId,
      user_id: req.body.user_id
    }
  }, (err, createdCategory) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect(`/categories/${req.params.genre}`)
      console.log(createdCategory);
    }
  })
})


app.get('/categories', (req, res) => {
  res.render('AllCategories')
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log("Listening on port:", PORT));