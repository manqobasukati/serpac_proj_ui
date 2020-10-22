export interface UserModel {
  username: string;
  fisrtname?: string;
  _id:string,
  password: string;
  surname?: string;
  access?:string,
  meta?:{[name:string]:string}
}
