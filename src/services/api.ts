import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://api.currencyapi.com/v3/latest';
const API: AxiosInstance = axios.create({ baseURL });

export { API };
