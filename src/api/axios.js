//noi cau hinh base cho axios
import axios from 'axios';
const apiAxios = axios.create({
    baseURL: 'https://6291d401cd0c91932b689dbb.mockapi.io'
});
export default apiAxios;