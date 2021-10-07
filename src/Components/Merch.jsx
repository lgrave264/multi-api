import React from 'react'

const Merch = () => {
    const { fetchNeko } = require("nekos-best.js");
    fetchNeko('hug', 15).then(console.log) 
    return (
        <div>
            hi
        </div>
    )
}

export default Merch
