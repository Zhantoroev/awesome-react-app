import React from 'react';
import Card from './Card';

const CardList = ({robots, data}) => {
  return (
    robots.map((user, i) => {
      return <Card key={i} name={robots[i].name} entries={robots[i].entries} id={robots[i].id} website={robots[i].website}/>
    })
  )
}

export default CardList;