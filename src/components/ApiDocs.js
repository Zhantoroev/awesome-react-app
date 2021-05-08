import React from 'react'
import Iframe from 'react-iframe'

const ApiDocs =() => {
  return (
    <div style={{height:'80vh'}}>
    <Iframe url="https://peaceful-retreat-54716.herokuapp.com/api-docs/"
        width="99%"
        height="99%"
        id="myId"
        className="myClassname"
        display="initial"/>
    </div>
  )
}

export default ApiDocs;