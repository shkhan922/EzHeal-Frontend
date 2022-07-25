import axios from 'axios';
const baseDomain = 'http://localhost:1337/api'; // API for products
//const baseDomain = 'http://localhost:1337';
export const basePostUrl = 'http://localhost:1337/api'; // API for post
export const baseStoreURL = 'http://localhost:1337/api' // API for vendor(store)

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});