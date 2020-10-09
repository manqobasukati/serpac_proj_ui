import { ProjectModel } from '../Models/ProjectModel';

export function createLabelArray(projects?: ProjectModel[]) {
  const sectors: string[] = [];

  if (projects) {
    projects.forEach((val: ProjectModel) => {
      if (!sectors.includes(val.project_description.economy_sector)) {
        sectors.push(val.project_description.economy_sector);
      }
    });
  }

  return {
    economic_sectors: sectors,
    months_of_the_year: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  };
}

export function createDataArray(
  labels: string[],
  data_type: string,
  data: ProjectModel[]
): string | number[] {
  const values: number[] = [];

  labels.forEach(val => {
    let my_value = 0;
    if (data_type === 'economy_sector') {
      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].project_description.economy_sector === val) {
          my_value = my_value + 1;
          console.log(my_value);
        }
      }
    }

    const i = labels.indexOf(val);

    values[i] = my_value;
  });


  return values;
}
