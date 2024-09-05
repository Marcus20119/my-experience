import axios from 'axios';
import type { Country } from './schemas';

const request = axios.create({
  baseURL: import.meta.env.VITE_REST_COUNTRY_API,
});

const getAllCountries = async (fields: (keyof Country)[]) => {
  const response = await request.get<Country[]>(
    `/all?fields=${fields.join(',')}`,
  );
  return response.data;
};

export const countryApi = {
  getAllCountries,
};
