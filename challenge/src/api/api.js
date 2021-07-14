/* 
 * Configuraçao inicial da API
 * Biblioteca axios para se comunicar com a API: https://github.com/axios/axios
*/

import axios from 'axios';

const hostname = window.location.hostname;
const apiUrl = hostname === "localhost" ? `http://${hostname}/api` : `https://${hostname}/api`;

const Api = axios.create({baseURL: apiUrl});

Api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default Api;
 