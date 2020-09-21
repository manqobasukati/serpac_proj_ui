import { ProjectModel } from '../Models/ProjectModel';

import { AppResponse, config } from './config';

export function project_create(data: ProjectModel): Promise<any> {
  const url = `${config.server_url}/project`;

  return fetch(url, {
    method: 'POST', // or 'PUT'test
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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
