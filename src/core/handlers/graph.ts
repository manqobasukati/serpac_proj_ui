import { ProjectModel } from '../Models/ProjectModel';

export function my_function(projects?: ProjectModel[]) {
  const labels = createOtherLabelArray(projects).project_statuses;

  const label_value = createOtherDataArray(
    labels,
    'project_status',
    projects as ProjectModel[]
  );

  const new_label: string[] = [];

  for (let i = 0; i <= labels.length - 1; i++) {
    for (let j = 0; j <= label_value.length - 1; j++) {
      if (labels.indexOf(labels[i]) === label_value.indexOf(label_value[j])) {
        new_label[i] = `${labels[i]} (${label_value[j]})`;
      }
    }
  }

  return new_label;
}

export function createOtherLabelArray(projects?: ProjectModel[]) {
  const status: string[] = [];

  if (projects) {
    projects.forEach((val: ProjectModel) => {
      if (val.project_status) {
        if (!status.includes(val.project_status)) {
          status.push(val.project_status);
        }
      }
    });
  }

  return {
    project_statuses: status
  };
}

export function createOtherDataArray(
  labels: string[],
  data_type: string,
  data: ProjectModel[]
) {
  const values: number[] = [];

  labels.forEach(val => {
    let my_value = 0;
    if (data_type === 'project_status') {
      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].project_status) {
          if (data[i].project_status === val) {
            my_value = my_value + 1;
          }
        }
      }
    }

    const i = labels.indexOf(val);

    values[i] = my_value;
  });

  return values;
}

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
        }
      }
    }

    const i = labels.indexOf(val);

    values[i] = my_value;
  });

  return values;
}

export function createDateDataArray(projects: ProjectModel[]) {
  
  const number_of_projects_per_month: number[] = Array.from(
    { length: 12 },
    () => {
      return 0;
    }
  );

  projects?.forEach(element => {
    if (typeof element.project_submitted !== 'object') {
      for (let i = 1; i <= 11; i++) {
        if (new Date(element.project_submitted)?.getMonth() === i) {
          number_of_projects_per_month[i] = number_of_projects_per_month[i] + 1;
          console.log(number_of_projects_per_month[i]);
        }
      }
    }
  });

  return number_of_projects_per_month;
}
