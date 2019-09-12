import axios from 'axios';
import { restoreTokenData } from './localStorage';
import { coreConstants } from './core.constants';

const axiosInstance = axios.create({
  baseURL: coreConstants.API
});

const requestInterceptor = async (config) => {
  const isOptionRequest = (config.method || '').toUpperCase() === 'OPTIONS';
  if (!isOptionRequest && !config.headers.Authorization) {
    
    let data = await restoreTokenData();

    if (data) {
      (config.headers || {Authorization:""}).Authorization = data;
    }
  }
  if (!isOptionRequest && !config.headers.Accept) {
    (config.headers || {Accept:""}).Accept = 'application/json';
  }
  if (!isOptionRequest && !config.headers['Content-Type']) {
    (config.headers || [{'Content-Type':''}])['Content-Type'] = 'application/json';
  }
  return config;
};

const requestRefuser = (err) => (new Promise((resolve, reject) => reject(err)));

axiosInstance.interceptors.request.use(requestInterceptor, requestRefuser);

export default axiosInstance;
