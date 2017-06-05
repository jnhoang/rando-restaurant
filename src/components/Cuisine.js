import React, {Component} from 'react';

const giphyAPIKey   = '&api_key=dc6zaTOxFJmzC';
const giphyLink     = 'http://api.giphy.com/v1/gifs/search?q=';
const originalArr   = ["Mexican", "Chinese", "Japanese", "Thai", "American", "Indian", "Soul", "Cambodian", "French", "Greek", "Vietnamese"];

class Cuisine extends Component {
  constructor() {
    super();
    this.state = {
      cuisines: originalArr,
      imgLinks: [],
      original: []
    };

  }
  componentDidMount() {
    let cuisines  = this.state.cuisines;
    let results   = [];

    // giphy call for each choice item in cuisine array
    cuisines.map( (food) => {
      fetch(giphyLink + food + ' food' + giphyAPIKey)
      .then( (res)  =>  res.json() )
      .then( (json) => {
        // adds the resulting image to a state arr
        results.push({ 
          name: food
        , link: json.data[0].images.fixed_height.url
        }); 

        this.setState({
          imgLinks: results,
          original: results
        });
      })
      .catch( (err) => console.log('error: ', err) );   
    })
  }
  deleteCuisine(cuisine) {
    let tempImgLinks = this.state.imgLinks;
    let test = tempImgLinks.filter( (food) => food.name !== cuisine );
    
    this.setState({imgLinks: test});
    console.log('state: ', this.state)
  }
  handleReset() {
    this.setState({imgLinks: this.state.original})
  }
  handleRandom() {
    let rand = Math.floor(Math.random() * this.state.cuisines.length);
    //this.setState({})
    console.log(rand);
  }
  render () {
    return (
      <div>
        <h1>Cuisine</h1>
        <button
          onClick={ (e) => this.handleReset(e) }>
          Reset
        </button>
        <button
          onClick={ (e) => this.handleRandom(e) }>
          Random
        </button>
        <ul>
          {this.state.imgLinks.map( (obj, index) => 
            <li key={index}>
              <img 
                src={obj.link} 
                alt={obj.name}/>
              <button
                name={obj.name}
                onClick={ (e) => this.deleteCuisine(e.target.name) }>
                {obj.name}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Cuisine;