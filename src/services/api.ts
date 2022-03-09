import axios, { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv';

const baseURL = 'https://api.currencyapi.com/v3/latest';
const apiKey = process.env.REACT_APP_API_KEY;
const API: AxiosInstance = axios.create({ baseURL });

export { API, apiKey };
