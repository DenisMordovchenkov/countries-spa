import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { countriesAPI } from '../api/countriesAPI'
import { Controls } from '../components/Controls'
import CountrysList from '../components/CountrysList'
import CountryCard from '../components/CountryCard'

const HomePage = ({countries, setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const navigate = useNavigate()

    const handleSearch = (search, region) => {
        let data = [...countries]
        if(region) {
            data = data.filter(c => c.region.includes(region))
        }

        if(search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data)
    }

    useEffect(() => {
        if(!countries.length) {
            countriesAPI.getAllCountries(setCountries)
        }
    }, [countries])
    return (
        <>
            <Controls onSearch={handleSearch}/>
            <CountrysList>
                {
                    filteredCountries.map(c => {
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