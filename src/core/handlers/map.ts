import { polygonContains } from 'd3';
import { ProjectModel } from '../Models/ProjectModel';


export function transformGeojson(geojson: any, projects: ProjectModel[]) {
  geojson.features.forEach((val: any) => {
    projects.forEach(v => {
      const contains = polygonContains(
        val.geometry.coordinates,
        v.project_description.project_location.coordinates as [number, number]
      );
      console.log(contains)
    });
   
  });

  //   for (let i = 0; i <= geojson.features.length - 1; i++) {
  //     console.log(i);
  //     for (let j = 0; j <= projects.length - 1; j++) {
  //       console.log(
  //         geojson.features[i].geometry.coordinates,
  //         projects[j].project_description.project_location.coordinates
  //       );
  //       const contains = polygonContains(
  //         geojson.features[i].geometry.coordinates,
  //         projects[j].project_description.project_location.coordinates as [
  //           number,
  //           number
  //         ]
  //       );

  //       console.log(contains);
  //     }
}
