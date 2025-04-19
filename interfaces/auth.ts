export interface Icredentials {
  identifier: string;
  password: string;
}
export interface IUser {
  id: number;
  username: string;
  email: string;
}
export interface IProfile {
  jwt: string;
  password: string;
  user: IUser;
}
