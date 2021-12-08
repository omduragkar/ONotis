import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <div className='w-100 h-100 m-auto p-auto text-center'>
            <Spinner className='m-auto p-auto text-center' animation="border" variant="primary" />
        </div>
    )
}

export default Loading
