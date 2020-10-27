import { ProjectModel } from '../Models/ProjectModel';

import { AppResponse, config } from './config';

export function update_project(data: ProjectModel) {
  const url = `${config.server_url}/project`;

  return fetch(url, {
    method: 'PUT', // or 'PUT'test
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
export function get_project(data: string) {
  const url = `${config.server_url}/project?_id=${data}`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      console.log('You are here', data);
      return data.payload as Promise<any>;
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
}

export function get_user_projects(data: string) {
  const url = `${config.server_url}/project?project_owners=${data}`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      console.log('Getting called');
      return data.payload as Promise<any>;
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
}

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

export function remove_project(data: string) {
  const url = `${config.server_url}/project?_id=${data}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      console.log('Getting called');
      return data.payload as Promise<any>;
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
}

export function upload_files(data: any) {
  console.log('Data', data)
  const url = `${config.server_url}/upload`;

  const formData: FormData = new FormData();

  data.forEach((element: any) => {
    console.log('Element',element);
    formData.append(`${element.name as string}`, element.url);
  });

  return fetch(url, {
    method: 'POST', // or 'PUT'test
    body: formData
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
