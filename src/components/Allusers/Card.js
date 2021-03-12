import React from 'react';

const Card = ({name, entries, id, onRouteChange, onSingleUser}) => {
  const run =() => {
    onRouteChange('singleUser');
    onSingleUser(id)
  }
  return (
        <div onClick={()=> run()} className='tc bg-light-blue dib grow pa3 br3 shadow-5 h6 w6 mh2 mv2 pointer' >
          <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
          <div>
            <h2 className='fw6'>{name}</h2>
            <h3>score: {entries}</h3>
          </div>
        </div>
  )
}

export default Card;