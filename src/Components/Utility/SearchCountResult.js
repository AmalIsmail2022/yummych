import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SearchCountResult = ({ title}) => {
        

   

    return (
<div className="d-flex justify-content-between pt-2 px-2 ">
            <div className="sub-tile py-4">{title}</div>
            <div className="search-count-text d-flex ">
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='my-4'>
      Products Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Perfect Reviews </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Most Sold</Dropdown.Item>
        <Dropdown.Item href="#/action-3">From High Price</Dropdown.Item>
        <Dropdown.Item href="#/action-3">From Low Price</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
        </div>
    );
}

export default SearchCountResult;
