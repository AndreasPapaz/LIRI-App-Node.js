var keys = require('./keys.js');
var fs = require('fs');
var twitter = require('twitter');
var twitterKeys = keys.twitterKeys;
var client = new twitter(twitterKeys);
var request = require('request');
var spotify = require('spotify');

var arguments = process.argv.slice(2);
var action = arguments[0];
var data = arguments[1];


//===============================================================
//function to append data to log.txt
//===============================================================
function append(append) {
	fs.appendFile('log.txt', append, (err) => {
		if (err) throw err;
	});
}

//===============================================================
// function run
//===============================================================
//look to see how he re wrote the params

function runLiri(action, data) {

	append('\n==== New Search = ' + action + ' - ' +data+ ' ====\n\n');

	switch(action) {

		case 'my-tweets':
			
			var screenName = {screen_name: data};
			client.get('statuses/user_timeline', screenName, function(error, tweets, response) {

				if (!error) {

					if (tweets.length > 0) {

						for (var i = 0; i < tweets.length; i++) {
							console.log(tweets[i].text);
							console.log("==================================");
							append(tweets[i].text+ '\n');
							append("=======================================\n")
						}
					}
					else {
						console.log('Seach for another Twitter hangdle');
						append('Seach for another Twitter hangdle');
					}

				}
				else {
					console.log("error: " + error);
					append("error: " + error + '\n');
				}
			});
		break;

		case 'movie-this':

			request("http://www.omdbapi.com/?t='+data+'&y=&plot=short&tomatoes=true&r=json", function (error, response, body) {

				if (!error && response.statusCode === 200) {

					body = JSON.parse(body);

					console.log("Title: " + body.Title);
					append("Title: " + body.Title+ "\n");

					console.log("Year: " + body.Year);
					append("Year: " + body.Year + "\n");

					console.log("Country: " + body.Country);
					append("Country: " + body.Country + "\n");

					console.log("Language: " + body.Language);
					append("Language: " + body.Language + "\n");

					console.log("Short PLot: " + body.Plot);
					append("Short PLot: " + body.Plot + "\n");

					console.log("Actors: " + body.Actors);
					append("Actors: " + body.Actors + "\n");

					console.log("Rotten Tomatoes Rating: " + body.tomatoUserRating);
					append("RTR: " + body.tomatoUserRating + "\n");

					console.log("Tomatoes URL: " + body.tomatoeURL);
					append("Tomatoes URL: " + body.tomatoeURL + "\n");
				}
				else {
					console.log("Error: " + error);
					append("Error: " + error + "\n");
				}
			});
		break;

		case 'do-what-it-says' :

			fs.readFile (data, "utf8", function(err, data) {

				var array = data.split(",");

				var fileAction = array[0];
				var fileData = array[1];

				runLiri(fileAction, fileData)
			});
		break;

		default: 

			console.log("USE A VALID FUNCTION");
			append("USE A VALID FUNCTION \n");
	}	
}


runLiri(action, data);
























