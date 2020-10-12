import { AppResponse, config } from './config';

export function get_projects(data: string) {
  const url = `${config.server_url}/project?${data}`;

  return fetch(url, {
    method: 'GET' // or 'PUT'test
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      return data.payload as Promise<any>;
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
}
