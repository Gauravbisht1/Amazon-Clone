import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-2b221/us-central1/api/',
});

export default instance;
