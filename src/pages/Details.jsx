import React from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
    const {title} = useParams()

    return (
        <div>
            Details {title}
        </div>
    )
}

export default Details