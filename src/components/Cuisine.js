import React, {Component} from 'react';

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
const giphyAPIKey = '&api_key=dc6zaTOxFJmzC';
const giphyLink = 'http://api.giphy.com/v1/gifs/search?q=';

class Cuisine extends Component {
  constructor() {
    super();
    this.state = {
      cuisines: ["Mexican", "Chinese", "Japanese", "Thai", "American", "Indian", "Soul", "Cambodian", "French", "Greek", "Vietnamese"]
    , images: []
    };

  }
  componentDidMount() {
    let cuisines = this.state.cuisines;
    var results = this.state.images;

    cuisines.map( (food) => {
      fetch(giphyLink + food + ' food' + giphyAPIKey)
      .then( (res) =>  res.json() )
      .then( (json) => {
        results.push({[food]: json.data[0].images.fixed_height.url});
        // console.log(results);
        console.log('res: ', results)
        
        this.setState({
          images: results
        });
      })
      .catch( (err) => console.log('error:', err) );   
    })
  }
  deleteCuisine(cuisine) {
    let temp = this.state.cuisines;
    let index = temp.indexOf(cuisine);

    temp.splice(index,1);
    this.setState({'cuisines': temp});
  }

  render () {
    return (
      <div>
        <h1>Cuisine</h1>
        <ul>
          {this.state.images.map( (obj, index) => <li key={index}><img src={obj[Object.keys(obj)]}/><button name={Object.keys(obj)} onClick={ (e) => this.deleteCuisine(e.target.name) }>{Object.keys(obj)}</button></li> )}

          {/*{this.state.cuisines.map( (food, index) => <li key={index}><img src={this.state.images[index][food]}/><button name={food} onClick={ (e) => this.deleteCuisine(e.target.name) }>{food}</button></li> )}*/}
        </ul>
      </div>
    );
  }
}

export default Cuisine;