import React from 'react';

const SearchBox = ({onSearchChange}) => {
  return (
    <div className = 'form br3  ba b--white-40 center pa4 br3 shadow-5 w-60' style={{minWidth:'380px'}}>
      <input className = 'f4 pa2 w-50 center' style={{minWidth:'250px'}}
        type="search" 
        placeholder="Enter a name" 
        onChange={onSearchChange}/>
    </div>
  )
} 

export default SearchBox;