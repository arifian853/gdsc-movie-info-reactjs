import React from "react";

const SearchBox = (props) => { 
    return(
        <div>
             <input value={props.value} onChange={(event)=> props.setSearchValue(event.target.value)} type="text" placeholder="Search Movie                           &#x1F50E;&#xFE0E;" className="search-col" />
        </div>
       
    );
}

export default SearchBox;