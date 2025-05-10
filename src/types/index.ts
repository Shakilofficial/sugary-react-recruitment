/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  Id: string;
  FullName: string;
  Email: string;
  RoleId: number;
  Avatar: string;
  [key: string]: any;
}
