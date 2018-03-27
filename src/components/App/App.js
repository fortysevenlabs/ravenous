import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

let business = {
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90
};

let businesses = [business, business, business, business, business, business];

class App extends Component {

	// why shouldn't this live closer to the Lets Go button i.e in SearchBar Component
	// how does having methods in Parent Component benefit react
	// ... understand better ... !!!
	searchYelp(term, location, sortBy) {
		console.log("The search is: " + term + ", " + location + ", " + sortBy);
	}

  render() {
    return (
        <div className="App">
            <h1>ravenous</h1>
            {/* <!-- Add SearchBar component here --> */}
            <SearchBar searchYelp={this.searchYelp} />
            {/* <!-- Add BusinessList component here --> */}
            <BusinessList businesses={businesses} />
        </div>
    );
  }
}

export default App;
