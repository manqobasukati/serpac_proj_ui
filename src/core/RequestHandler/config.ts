export const config = {
  server_url: 'https://eserparc.herokuapp.com',
  phepha_url: 'https://portal.ndma.org.sz:4300'
  //server_url: 'http://10.0.0.240:4000'
};

export interface AppResponse {
  message?: string;
  payload?: any;
  debug?: string | Error;
}
