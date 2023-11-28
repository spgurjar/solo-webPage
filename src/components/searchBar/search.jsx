import React, {useState} from 'react';
import './search.css';


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("Search influencers by username, first name, last name, tags");

    return(
        <div className='search-body'>
            <input
            type="search"
            className="search-input"
            // placeholder="Search influencers by username, first name, last name, tags"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton">
            Search
       </button>
        </div>
    )
}