import React from 'react'
import Iframe from 'react-iframe'

const ApiDocs =() => {
  return (
    <div style={{height:'80vh'}}>
    <Iframe url={'/api/api-docs/'}
        width="99%"
        height="99%"
        id="myId"
        display="initial"/>
    </div>
  )
}

export default ApiDocs;