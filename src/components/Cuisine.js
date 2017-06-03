import React, {Component} from 'react';

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
    let cuisines  = this.state.cuisines;
    let results   = this.state.images;

    // giphy call for each choice item in cuisine array
    cuisines.map( (food) => {
      fetch(giphyLink + food + ' food' + giphyAPIKey)
      .then( (res)  =>  res.json() )
      .then( (json) => {
        // adds the resulting image to a state arr
        results.push({[food]: json.data[0].images.fixed_height.url});    
        this.setState({
          images: results
        });
      })
      .catch( (err) => console.log('error: ', err) );   
    })
  }
  deleteCuisine(cuisine) {
    let temp = this.state.cuisines.filter( (food) => food !== cuisine);

    this.setState({cuisines: temp});
  }
  handleReset() {

  }
  handleRandom() {

  }
  render () {
    return (
      <div>
        <h1>Cuisine</h1>
        <ul>
          {this.state.images.map( (obj, index) => 
            <li key={index}>
              <img src={obj[Object.keys(obj)]}/>
              <button 
                name={Object.keys(obj)} 
                onClick={ (e) => this.deleteCuisine(e.target.name) }>
                { Object.keys(obj) }
              </button>
            </li> 
          )}
        </ul>

        <button
          onClick={ (e) => this.handleReset(e) }>
          Reset
        </button>
        <button
          onClick={ (e) => this.handleRandom(e) }>
          Reset
        </button>
      </div>
    );
  }
}

export default Cuisine;