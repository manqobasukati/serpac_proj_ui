import { ProjectModel } from '../Models/ProjectModel';
import {
  booleanPointInPolygon,
  polygon,
  point,
  centroid,
  Feature
} from '@turf/turf';
import { config } from '../RequestHandler/config';

export function transformGeojson(geojson: any, projects: ProjectModel[]) {
  geojson.features.forEach((val: any) => {
    let present = 0;
    projects.forEach(v => {
      if (v.project_description.project_location.coordinates?.length === 2) {
        const contains = booleanPointInPolygon(
          point(
            v.project_description.project_location.coordinates as [
              number,
              number
            ]
          ),
          polygon(val.geometry.coordinates)
        );

        if (contains) {
          present = present + 1;
        }
      }

      val = setProperty(val, 'number_of_projects', present);
    });
  });

  return geojson as unknown;
}

export function addProperty(geojson: Feature, property: string) {
  geojson.properties = {
    ...geojson.properties,
    [property]: ''
  };

  return geojson as unknown;
}

export function setProperty(
  geojson: any,
  property: string,
  value: string | number | boolean
) {
  geojson.properties = {
    ...geojson.properties,
    [property]: value
  };

  return geojson as unknown;
}

export function convertToRange(
  value: number,
  srcRange: number[],
  dstRange: number[]
): number {
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]) {
    return NaN;
  }

  const srcMax = srcRange[1] - srcRange[0];
  const dstMax = dstRange[1] - dstRange[0];
  const adjValue = value - srcRange[0];

  return (adjValue * dstMax) / srcMax + dstRange[0];
}

export function getMax(array: any, property: string) {
  let max = 0;
  array.forEach((character: any) => {
    if (character.properties[property] > max) {
      max = character.properties[property];
    }
  });

  return max;
}

export function getMin(array: any, property: string) {
  let min = 0;
  array.forEach((character: any) => {
    if (character.properties[property] < min) {
      min = character.properties[property];
    }
  });

  return min;
}

export function geoj(geojson: any) {
 
  const geo = Promise.all(
    geojson.features.map((val: any) => {
      const post_data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          longitude: centroid(val.geometry).geometry?.coordinates[0],
          latitude: centroid(val.geometry).geometry?.coordinates[1]
        })
      };

      return fetch(`${config.phepha_url}/inkhundla/determine`, post_data)
        .then((v: any) => {
          return v.json().then((v2: any) => {
            val = setProperty(val, 'region', v2.payload.region);
            if (geojson.features.length > 4) {
              val = setProperty(val, 'inkhundla', v2.payload.name);
            }
            return val as unknown;
          }) as unknown;
        })
        .catch(e => {
          console.log(e);
        });
    })
  );

  return geojson as unknown;
}
