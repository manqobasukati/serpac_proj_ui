export const config = {
  server_url: 'https://eserparc.herokuapp.com/'
};

export interface AppResponse {
  message?: string;
  payload?: any;
  debug?: string | Error;
}
