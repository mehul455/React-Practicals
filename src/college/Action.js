import React from 'react'
import Iframe from 'react-iframe'

const Action = () => {
    // https://www.youtube.com/watch?v=RZVkPuwxfgY
    return (
        <div>
            <h1>erfwe</h1>
            <Iframe url="https://www.youtube.com/embed/watch?v=RZVkPuwxfgY"
        width="350px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
    )
}

export default Action
