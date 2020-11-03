import { AppResponse, config } from '../RequestHandler/config';
import Tinkhundla from './../../mixins/Tinkhundla';
import inkhundla_na from 'src/core/geojson/inkhundla_na.json';

export const EconomicSectors = [
  'Energy',
  'Telecommunications',
  'Agriculture',
  'Frorestry',
  'Mining'
];

export const ProjectExistence = ['New', 'Old'];

export const ProjectSkillsOptions = () => {
  const url = `${config.server_url}/content`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      return data.payload['project_skills'] as Promise<any>;
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
};

export const LocallySourcedInputsOptions = ['Water', 'Cement'];

export const ExternallySourcedInputsOptions = ['Elecricity', 'Systems'];

export const StakeHoldersOptions = ['SWSC', 'EPTC', 'REPS'];

export function TinkhundlaPolygons() {
  return inkhundla_na;
}

export function TinkhundlaOptions() {
  return Tinkhundla.map(val => {
    return val.name;
  });
}

export function get_static(field?: string) {
  const url = `${config.server_url}/content`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data: AppResponse) => {
      const result = field ? data.payload[field] : data.payload;

      return result as string[];
    })
    .catch(error => {
      console.error('Error:', error);
      return error as Promise<any>;
    });
}

export function put_static(data: {
  [name: string]: string[] | [{ [name: string]: string }];
}) {
  const url = `${config.server_url}/content`;

  return fetch(url, {
    method: 'PUT',
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
