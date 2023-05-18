import React from "react"
import './Error.css'

const Error = ( {message} ) => {
    return (
        <div>
            <h1 className='error-message'>{message}</h1>
        </div>
    )
};

export default Error