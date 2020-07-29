import React from 'react'

const Display = ({ name, value }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}

export default Display;
