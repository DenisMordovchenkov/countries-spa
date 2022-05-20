import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { countriesAPI } from '../api/countriesAPI'
import { Controls } from '../components/Controls'
import CountrysList from '../components/CountrysList'
import CountryCard from '../components/CountryCard'

const HomePage = ({countries, setCountries}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(!countries.length) {
            countriesAPI.getAllCountries(setCountries)
        }
    }, [countries])
    return (
        <>
            <Controls/>
            <CountrysList>
                {
                    countries.map(c => {
                        const countryInfo = {
                            img: c.flags.png,
                            title: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        }
                        return (
                            <CountryCard key={ c.name } onClick={() => navigate(`/country/${c.name}`)} { ...countryInfo }/>
                        )
                    })
                }
            </CountrysList>
        </>
    )
}

export default HomePage