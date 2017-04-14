# LIRI-App-Node.js

Language interpretation and recognition interface

# SET UP

    1) Clone the repo.

    2) create a keys.js with your twitter keys for the twitter functionality.

            i.e.)
                    exports.twitterKeys = {
                    consumer_key: '<YOUR KEY HERE>',
                    consumer_secret: '<YOUR SECERET CODE HERE>',
                    access_token_key: '<YOUR TOKEN KEY HERE>',
                    access_token_secret: '<YOUR TOKEN SECERET KEY HERE>',
                    }

    3) Install node on your local machine.

    4) In terminal install required npm package content. (this will download the depedencies from package.json)

            i.e.) 
                    Andreas:LIRI-App-Node.js Andreas$ npm install 

    
# USE

    1) nav to the folder location in terminal. 

            i.e.) 
                    Andreas:LIRI-App-Node.js Andreas$ 
            
            to get there -> cd "<clone location>" (i use my desktop) -> cd desktop -> cd LIRI-App-Node.js

    2) run node liri.js file and use the following function/keys then an action

            a) 'my-tweets'
            b) 'spotify-this-song'
            c) 'movie-this'
            d) 'do-what-it-says' 

            i.e.) node liri.js my-tweets 'andreaspapaz'

