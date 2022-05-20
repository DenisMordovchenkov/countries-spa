import * as axios from 'axios'
import { ALL_COUNTRIES, BASE_URL } from './configAxios'

const query = axios.create({
    baseURL: BASE_URL
})


export const countriesAPI = {
    getAllCountries(setCountries) {
        return query
            .get(ALL_COUNTRIES)
            .then(({data}) => setCountries(data))
    }
}