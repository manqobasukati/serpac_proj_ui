import { UserModel } from '../Models/UserModel';
import { AppResponse, config } from './config';

export function create_user(data: UserModel) {
  const url = `${config.server_url}/user`;

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

export function login(data: UserModel) {
  const url = `${config.server_url}/access`;

  return fetch(url, {
    method: 'POST', // or 'PUT'test
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      return data as Promise<any>;
    })
    .catch(error => {
      return error as Promise<any>;
    });
}

export function get_users(): Promise<UserModel[] | any> {
  const url = `${config.server_url}/user`;

  return fetch(url, {
    method: 'GET', // or 'PUT'test
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      return data.payload as Promise<UserModel[]>;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
