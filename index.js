require('dotenv').config();
const express   = require('express');
const yelpKey   = process.env.YELP_KEY;
const app       = express();
const test      = {off: 'you'};
const path      = require('path');
const Yelp      = require('yelp');
const yelp      = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});

const yelpSeachObj = {
  term:     'food',
  location: 'seattle',
  limit:    6,           // only 5 results returned
  sort:     2             // 2 = highest rated results
}

app.get('/api/yelp', (req, res) => {
  yelp.search(yelpSearchObj)
    .then( (foodData) => res.send({yelpFoodArr: foodData.businesses}) )
    .catch( (err) => res.send({message: 'error while searching for food'}) );
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);