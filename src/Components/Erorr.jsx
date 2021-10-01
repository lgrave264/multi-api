import React from 'react'
import error from '../Util/error.gif'

const Error = () => {
    return (
        <article className='fill'>
            <div><img src={error} alt="Loading..."/></div>
        </article>
    )
}

export default Error
