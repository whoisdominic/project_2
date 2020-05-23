//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;

const axios = require('axios').default;

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
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//////////////////////////
// API
//////////////////////////


//////////////////////////
// Player Search
//////////////////////////

const searchPlayer = (playerName, res) => {

	axios({
		"method":"GET",
    "url":`https://api-football-v1.p.rapidapi.com/v2/players/search/${playerName}`,
    "headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
			"x-rapidapi-key":"91433b6e49mshc9a6cf39118d641p12ab91jsndc6959b50f40",
			"useQueryString":true
    }
	})
	.then((response)=>{
				res.render('SearchRes', {
					results: response.data.api.players
				})
	})
	.catch((error)=>{
        console.log(error)
	})
	
}

//////////////////////////
// Spotify
//////////////////////////

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '32995d0523ec4bb39a2e39d2fa56ac35',
  clientSecret: '490e51713f024d43b9773eaf68334484',
  redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setAccessToken('BQDj-iCjBmREO_bQdsiBnEpsygsrRkrETLFkWmuhUoO1JoNtDt7bN3Rl2fTRnHBKLE7XhVPgjdl7cb5MBTqEMAbYMTCYO4oomadMA9i4fTFoo7LHv4HnscIAdb2wNou7Ztz3RqhWL8MB7_fS6j7OEzEu8p_UPfrLPrL1_GD2fWmFk43qv_LqZQ');


// Get Elvis' albums
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  function(data) {
    console.log('Artist albums', data.body);
  },
  function(err) {
    console.error(err);
  }
);




//___________________
// Routes
//___________________
app.get('/' , (req, res) => {
  res.render('Index');
});


app.get('/search', (req, res) => {
	res.render('Search')
})

app.get(`/search/:searchParam`, (req, res) => {
	searchPlayer(req.params.searchParam, res)
})

app.get('/spotify', (req, res) => {

})

//////////////////////////
// API PRACTICE
//////////////////////////

// // console.log(axios);\
// // get
// const apiTest = () => {
// 	axios.get("https://jsonplaceholder.typicode.com/users")
// 	.then((res) => {
// 		console.log(res.data)})
// 		.catch((err) => {console.log(err)})
// 		.then(() => {console.log('wtf')})
// }


//////////////////////////
// PRACTICE END
//////////////////////////



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));