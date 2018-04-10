import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp.js';

class App extends Component {
	// required because we'll be setting state
	constructor() {
		super();
		this.state = { businesses: [] };
		// required since searchYelp uses this
		this.searchYelp = this.searchYelp.bind(this);
	}

	// why shouldn't this live closer to the Lets Go button i.e in SearchBar Component?
	// because App is the stateful component and you access/set state in this component.
	searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then(
			updatedBusinesses => {
				this.setState({businesses: updatedBusinesses})
			}
		)
	}

  render() {
    return (
        <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={this.searchYelp} />
            <BusinessList businesses={this.state.businesses} />
        </div>
    );
  }
}

export default App;