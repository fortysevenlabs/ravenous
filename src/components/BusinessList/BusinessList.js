import React from 'react';
import './BusinessList.css';
// should path be "../Business/{Business or Business.js}"
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

// BusinessList component will be rendered by another component
// so, export BusinessList component
export default BusinessList;