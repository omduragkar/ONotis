import React from 'react'

const Error = (prop) => {
    return (
        <div>
            {/* {console.log(prop.error + "from error! ")} */}
            <h2>{prop.error}</h2>
        </div>
    )
}

export default Error
