export const config = {
  server_url: 'https://eserparc.herokuapp.com'
  //server_url: 'http://10.0.0.240:4000'
};

export interface AppResponse {
  message?: string;
  payload?: any;
  debug?: string | Error;
}
