import axios from 'axios';

const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export default class Http {
  
  static get(endpoint, params, requestConfig){
    const paramsConfig = params ? { params } : undefined;
    return Http._request(
      {
        url: endpoint,
        method: RequestMethod.GET,
      },
      {
        ...paramsConfig,
        ...requestConfig,
      }
    );
  }
  
  static post(endpoint, data){
    const config = data ? { data } : undefined;
    return Http._request(
      {
        url: endpoint,
        method: RequestMethod.GET,
      },
      config
    );
  }
  
  static put(params){
  
  }
  
  static delete(params){
  
  }
  
  static _request({url, method}, config ){
    const requestConfig = {
      ...config,
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    return axios(requestConfig);
    
  }
  
}