import React from 'react';

const SearchBox = ({onSearchChange}) => {
  return (
    <div className = 'form br3  ba b--white-10 center pa4 br3 shadow-5 w-60'>
      <input className = 'f4 pa2 w-50 center' type="search" placeholder="enter name" onChange={onSearchChange}/>
    </div>
  )
} 

export default SearchBox;