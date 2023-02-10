import React from 'react';
import Card from './Card';

const CardList = ({robots, data, onRouteChange, onSingleUser}) => {
  return (
    robots.map((user, i) => {
      return (<Card 
        key={i} 
        name={robots[i].name} 
        score={robots[i].score} 
        id={robots[i].id} 
        onRouteChange={onRouteChange}
        onSingleUser={onSingleUser}
        />)
    })
  )
}

export default CardList;