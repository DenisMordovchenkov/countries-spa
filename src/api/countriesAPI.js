import * as axios from 'axios'
import { ALL_COUNTRIES, BASE_URL, filterByCode, searchByCountry } from './configAxios'

const query = axios.create({
    baseURL: BASE_URL,
})


export const countriesAPI = {
    getAllCountries(setCountries) {
        return query
            .get(ALL_COUNTRIES)
            .then(({data}) => setCountries(data))
    },
    searchByCountry(title, setCountry) {
        return query
            .get(searchByCountry(title))
            .then(({data}) => setCountry(data[0]))
    },
    filterByCode(borderCodes, setNeighbours) {
        return query
            .get(filterByCode(borderCodes))
            .then(({data}) => setNeighbours(data.map(c => c.name)))
    }
}