import React, {Component} from 'react';



class Cuisine extends Component {
  constructor() {
    super();
    this.state = {cuisines: ["Mexican", "Chinese", "Japanese", "Thai", "American", "Indian", "Soul", "Cambodian", "French", "Greek", "Vietnamese"]};

  }


  render () {
    return (
      <div>
        <h1>Cuisine</h1>
        <ul>
          {this.state.cuisines.map( (food, index) => <li key={index}><button name={food} onClick={ (e) => console.log(e.target.name) }>{food}</button></li> )}
        </ul>
      </div>
    );
  }
}

export default Cuisine;