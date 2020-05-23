const axios = require('axios')


//////////////////////////
// Searches for player stats
//////////////////////////
const searchPlayerStats = (playerId) => {

	axios({
		"method":"GET",
    "url":`https://api-football-v1.p.rapidapi.com/v2/players/player/${playerId}`,
    "headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"api-football-v1.p.rapidapi.com",
			"x-rapidapi-key":"91433b6e49mshc9a6cf39118d641p12ab91jsndc6959b50f40",
			"useQueryString":true
    }
	})
	.then((response)=>{
		console.log(response)
	})
	.catch((error)=>{
		console.log(error)
	})
	
}


// module.exports = searchPlayer