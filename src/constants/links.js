// links
const BASE_URL = 'https://restcountries.com/v3.1/';

const KEYS_FOR_COUNTRIES = 'all?fields=name,capital,flags,population,region,cca3';

export const ALL_COUNTRIES = BASE_URL + KEYS_FOR_COUNTRIES;

export const searchByCountry = (id) => {
  return BASE_URL + 'alpha/' + id ;
};

export const filterByCode = (codes) => {
  return BASE_URL + 'alpha?codes=' + codes.join(',').toLowerCase();
};
