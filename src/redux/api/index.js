import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=5c6d9a6c';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});