import axios from 'axios';

export const ajaxApi = (method, url, authParams) => {
  if (method === 'get') {
    return axios.request({
      method,
      url,
      headers: authParams,
    });
  }
  return axios.request({
    method,
    url,
    data: authParams,
  });
};
export const updateApi = (method, url, authParams, data) => {
  return axios.request({
    method,
    url,
    headers: authParams,
    data,
  })
};