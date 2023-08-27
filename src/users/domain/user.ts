
export class User {
  _id: string;
  name: string;
  lastName: string;
  userName: string;
  completeName: string;
  email: string;
  password: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    name: string,
    lastName: string,
    userName: string,
    completeName: string,
    email: string,
    password: string,
    status = true,
  ) {
    this._id = '';
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.completeName = completeName;
    this.email = email;
    this.password = password;
    this.status = status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}