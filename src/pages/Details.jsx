import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { countriesAPI } from '../api/countriesAPI'
import { Button } from '../components/Button'
import Info from '../components/Info'

const Details = () => {
    const {title} = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        countriesAPI.searchByCountry(title, setCountry)
    },[title])
    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> back
            </Button>
            {country && (<Info {...country}/>)}

        </div>
    )
}

export default Details