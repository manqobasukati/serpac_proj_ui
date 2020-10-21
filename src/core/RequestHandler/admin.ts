import { AppResponse, config } from './config';

export function get_projects(data?: string) {
  

  const url = data ? `${config.server_url}/project?${data}`: `${config.server_url}/project`;

  return fetch(url, {
    method: 'GET' // or 'PUT'test
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      console.log('Data =>', data)
      return data.payload as Promise<any>;
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
}
