import { ProjectModel } from '../Models/ProjectModel';
import { booleanPointInPolygon, polygon, point } from '@turf/turf';

interface PropertiesObject {
  [key: string]: any;
}

export function transformGeojson(geojson: any, projects: ProjectModel[]) {
  geojson.features.forEach((val: any) => {
    //val = addProperty(val, 'number_of_projects');
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
    });

    val = setProperty(val, 'number_of_projects', present);
  });

  return geojson as unknown;
}

export function addProperty(geojson: any, property: string) {
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

  console.log('MAX', max);
  return max;
}

export function getMin(array: any, property: string) {
  let min = 0;
  array.forEach((character: any) => {
    if (character.properties[property] < min) {
      min = character.properties[property];
    }
  });

  console.log(min)

  return min;
}
