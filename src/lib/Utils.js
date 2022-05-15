import axios from 'axios';

import {API_LIST} from '../api';

/**
 *
 * @param {*} url
 * @param {*} method
 * @param {*} params
 * @returns api call response
 */
export const makeApiCall = async (url, method = 'GET', params) => {
  try {
    const configurationObject = {
      method: method,
      url: url,
    };
    if (method === 'POST') {
      // TODO:: bind params to post data
    }
    const response = await axios(configurationObject);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.log('AXIOS ERROR : error while making network request - ', error);
    return {
      success: false,
      info: error.code,
    };
  }
};

/**
 *
 * @param {String} apiName
 * @param  {Object} params
 * @returns relevant API endpoint
 */
export const getAPI = (apiName, params = {}) => {
  const tmpApiConfig = API_LIST.filter(
    apiConfig => apiName === apiConfig.apiName,
  )[0];
  if (tmpApiConfig.hasParams) {
    let tmpApiEndpoint = tmpApiConfig.endpoint;
    const paramKeys = Object.keys(params);
    paramKeys.map((key, index) => {
      tmpApiEndpoint = tmpApiEndpoint.replace(key, params[key]);
    });
    return tmpApiEndpoint;
  }
  return tmpApiConfig.endpoint;
};
