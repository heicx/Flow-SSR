import axios from 'axios'
import qs from 'qs'
import INTERFACE_PATH from './interfaces'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
axios.defaults.withCredentials = false;

const get = (name, params) => {
  return axios.get(INTERFACE_PATH[name], {params: params})
    .then(oRes => {
      if (oRes.status === 200) {
        return oRes.data;
      } else {
        return [];
      }
    })
    .catch(oErr => {
      return {
        code: -1,
        errorInfo: oErr
      }
    });
}

const post = (name, params, isFormData = true) => {
  let url = /^(http|\/\/)/.test(name) ? name : INTERFACE_PATH[name];
  return axios.post(url, isFormData ? qs.stringify(params) : params)
    .then(oRes => {
      if (oRes.status === 200) {
        return oRes.data;
      } else {
        return [];
      }
    })
    .catch(oErr => {
      return {
        code: -1,
        errorInfo: oErr
      }
    });
}

export default {
  get,
  post
}
