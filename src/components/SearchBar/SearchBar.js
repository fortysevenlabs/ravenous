import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    // why did we add a constructor? because
		// * we'll be setting state in this component
	  // * we'll be binding a few function to this
    constructor(props) {
        super(props);
        this.state = {term: '', location: '', sortBy: 'best_match'};
        // binded with params, see renderSortByOption
	      // this.handleSortByChange = this.handleSortByChange.bind(this);
	      this.handleTermChange = this.handleTermChange.bind(this);
	      this.handleLocationChange = this.handleLocationChange.bind(this);
	      this.handleSearch = this.handleSearch.bind(this);
    }

		sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		}

		// return css class for selected sortBy option
		getSortByClass(sortByOption) {
			return this.state.sortBy === sortByOption ? 'active' : '';
		}

		handleSortByChange(sortOptionByValue) {
			this.setState({
				sortBy: sortOptionByValue
			});
		}

		// binded with params, see renderSortByOption
		// handleSortByChange(e) {
		//  const newSortByOption = this.sortByOptions[e.target.innerHTML.trim()];
		// 	this.setState({
		// 		sortBy: newSortByOption
		// 	});
		// }

		handleTermChange(e){
    	const newTerm = e.target.value;
			this.setState({
				term: newTerm
			});
		}

		handleLocationChange(e){
			const newLocation = e.target.value;
			this.setState({
				location: newLocation
			});
		}

		handleSearch(e) {
			this.props.searchYelp(this.state.term,
														this.state.location,
														this.state.sortBy);
			// prevent the default action of clicking a link
			// from triggering at the end of the method
			// ...understand better...!!!
			e.preventDefault();
		}

	  // Note regarding onClick being bound directly
	  // with params here instead of constructor
		// This will allow us to both bind to the current value of this
	  // (as we usually do in the constructor()) but also bind the current
	  // sortByOptionValue as the first argument to the method call, ensuring
	  // the method is called with the appropriate value when clicked.
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue}
                       className={this.getSortByClass(sortByOptionValue)}
                       onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
	                   {sortByOption}
                   </li>
        });

    };

    render() {

        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                <ul>
	                {/* You want to execute this function, hence you call with () */}
	                {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
	                {/*
	                  * You don't want to execute the function when not using ()
	                  * You don't want functions mapped to event handlers being triggered when the code is encountered
	                  * So, you are telling to use handleSearch (a reference to the function) when this event triggers
	                function when the event happens.
	                */}
	                <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;