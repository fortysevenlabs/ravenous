import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
              {this.props.businesses.map((business) => { return <Business key={business.name} business={business} /> } )}
            </div>
        )
    }
}

// BusinessList component will be rendered by another component
// so, export BusinessList component
export default BusinessList;