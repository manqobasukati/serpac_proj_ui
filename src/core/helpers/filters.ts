import { count } from 'console';

export function removeUnderscore(name: string) {
  return name.split('_').join(' ');
}

export function capitaliseWords(name: string) {
  const length = name.split(' ').length;

  if (length === 1) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    return name
      .split(' ')
      .map(val => {
        return val.charAt(0).toUpperCase() + val.slice(1);
      })
      .join(' ');
  }
}

export function formMoney(money: number) {


  return new Intl.NumberFormat().format(money)
}

export const FILTERS = {
  removeUnderscore,
  capitaliseWords,
  formMoney
};
