import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    sortByOptions = {
        'Best Match': 'best_match',
        'Highest Reviewed': 'rating' ,
        'Most Reviewed': 'review_count',
    };

    renderSortByOptions(sortByOptions) {
        Object.keys(sortByOptions).map(sortByOption => {
            console.log(sortyByOption);
            let sortByOptionValue = sortByOptions[sortByOption];
            // how would it return three times?
            return <li key={sortByOptionValue}> {sortByOption} </li>
        });

    };

    render() {

        return (
            <div class="SearchBar">
                <div class="SearchBar-sort-options">
                <ul>
                    <!-- Use .renderSortByOptions() to sort the businesses by their options -->
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div class="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
                </div>
                <div class="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;