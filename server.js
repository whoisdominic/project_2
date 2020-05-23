//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
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
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useFindAndModify: true,
	useUnifiedTopology: true
});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open', () => {});

//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({
	extended: false
})); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method')); // allow POST, PUT and DELETE from a form

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
			"method": "GET",
			"url": `https://api-football-v1.p.rapidapi.com/v2/players/search/${playerName}`,
			"headers": {
				"content-type": "application/octet-stream",
				"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
				"x-rapidapi-key": "91433b6e49mshc9a6cf39118d641p12ab91jsndc6959b50f40",
				"useQueryString": true
			}
		})
		.then((response) => {
			res.render('SearchRes', {
				results: response.data.api.players
			})
		})
		.catch((error) => {
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

spotifyApi.setAccessToken('BQB_7zsCQlWF48kkdT2tIacYQyrz5UBkaO-HJZTrv4TiBFiC4T3N8C5d-LRzeXoZ6u2mkL2D1QkV0srau86WjhskgDFApVymSI6M1D53PCWGvV8O4AKOwg0qNevXWzaYulv6H4a3OXeF5KWWDyXrsOPZ7MnhmJiKZVWupqkWQitYmpBwxUH3yQ');


spotifyApi.setRefreshToken('AQD1OOqqnP2EOvbMeyLL2tc3ZaO6mhhCSRwVzbh4b5tdBrFPL4O7K0XWhM1DGM6ufx596ZVfRV75VPWwsS7XisCDPV3gfGZ0uxqLnQg3hsRPByc4P6dXhQ_LexKFmzddo-Y')



//////////////////////////
// Test area
//////////////////////////

// spotifyApi.getArtist('3TVXtAsR1Inumwj472S9r4')
// .then(function(data) {
// 	console.log('Artist information', data.body);		
// }, function(err) {
//   console.error(err);
// });




//////////////////////////
// Routes
//////////////////////////

app.get('/', (req, res) => {
	res.render('Index');
});


app.get(`/search/:searchParam`, (req, res) => {

	spotifyApi.searchArtists(req.params.searchParam)
		.then(function (data) {
			console.log(`Search artists by "${req.params.searchParam}"`, data.body);
			res.render('SearchRes', {
				results: data.body,
				search: req.params.searchParam
			})
		}, function (err) {
			console.error(err);
		});

})

app.get('/search', (req, res) => {
	res.render('Search')
})

app.get('/spotify', (req, res) => {

})

app.post('/search', (req, res) => {
	console.log(req.body);
	res.redirect(`/search/${req.body.search}`)
})

app.get('/artist/:id', (req, res) => {
	spotifyApi.getArtist(req.params.id)
		.then(function (data) {
			console.log('Artist information', data.body);

			spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
				.then(function (dataTracks) {
					console.log('server tracks ', dataTracks.body);

					res.render('Artist', {
						tracks: dataTracks.body,
						results: data.body,
						id: req.params.id
					})

				}, function (err) {
					console.log('Something went wrong!', err);
				});

		}, function (err) {
			console.error(err);
		});
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));