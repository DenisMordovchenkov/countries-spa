export const BASE_URL = 'https://restcountries.com/v2/'

export const ALL_COUNTRIES = `all?fields=name,capital,flags,population,region`

export const searchByCountry = (name) => `name/${name}`

export const filterByCode = (codes) => `alpha?codes=${codes.join(',')}`