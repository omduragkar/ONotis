import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const Error = (prop) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert className='w-100 m-auto p-auto' variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{prop.error}</Alert.Heading>
            </Alert>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

export default Error
