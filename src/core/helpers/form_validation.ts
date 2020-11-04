import { flattenObject } from './request';

export function user_form_validate(data: any, scenario: string): string {
  let message = '';
  const missing_properties: string[] = [];
  const scenarios: { [name: string]: string[] } = {
    admin_sign_up: ['firstname', 'surname', 'password', 'email'],
    public_sign_up: ['name', 'email', 'password', 'lastname', 'firstname'],
    admin_sign_in: ['email', 'password'],
    public_sign_in: ['email', 'password']
  };

  scenarios[scenario].forEach((val: string) => {
    const indexOf = scenarios[scenario].indexOf(val);
    if (!data[scenarios[scenario][indexOf]]) {
      missing_properties.push(val);
    }
  });

  if (missing_properties.length !== 0) {
    message = `${missing_properties.join(',')} are required poperties.`;
  }

  return message;
}

export function form_completeion(data: any) {
  if (typeof data !== 'object') {
    return;
  }
  const flat = flattenObject(data);

  const key_count = Object.keys(flat).length;
  let empty = 0;

  for (const key in flat) {
    
    if (flat[key]) {
      empty = empty + 1;
    }
  }

  return (empty / key_count) * 100;
}
