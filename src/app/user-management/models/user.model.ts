export interface SharedId {
  id?: string;
}

export interface User extends SharedId {
  fullName: string;
  email: string;
  location: string;
  avatar: string;
  joinDate: string;
  permission: PERMISSIONS;
}

export enum PERMISSIONS {
  ADMIN = 'ADMIN',
  VIEWER = 'VIEWER',
  CONTRIBUTER = 'CONTRIBUTER',
}
