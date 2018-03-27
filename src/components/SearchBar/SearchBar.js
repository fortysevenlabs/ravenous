import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    // why did we add a constructor?
    // because we'll be setting state
    constructor(props) {
        super(props);
        this.state = {term: '', location: '', sortBy: 'best_match'};
	      this.handleSortByChange = this.handleSortByChange.bind(this);
				this.handleTermChange = this.handleTermChange.bind(this);
				this.handleLocationChange = this.handleLocationChange.bind(this);
    }

		// I am constantly making the mistake
		// of defining this const object in the
		// Component Class
		// Why was this a global variable before?
		sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		}

		// return css class for selected sorting option
		getSortByClass(sortByOption) {
			return this.state.sortBy === sortByOption ? 'active' : '';
		}

		// fix this per instruction #9
		handleSortByChange(e) {
    	const newSortByOption = this.sortByOptions[e.target.innerHTML.trim()];
			this.setState({
				sortBy: newSortByOption
			});
		}

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

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue}
                       className={this.getSortByClass(sortByOptionValue)}
                       onClick={this.handleSortByChange}>
	                   {sortByOption}
                   </li>
        });

    };

    render() {

        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                <ul>
                    {/* <!-- Use .renderSortByOptions() to sort the businesses by their options --> */}
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;