import axios from 'axios'
//axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.baseURL = 'http://localhost:3258';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios;