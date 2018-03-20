import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
        <div class="App">
            <h1>ravenous</h1>
            {/* <!-- Add SearchBar component here --> */}
            <SearchBar />
            {/* <!-- Add BusinessList component here --> */}
            <BusinessList />
        </div>
    );
  }
}

export default App;
