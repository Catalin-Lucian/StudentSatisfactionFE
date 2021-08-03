import { Role } from "./role";

export interface User{
  id:string,
  type:Role,
  username:string,
  password:string,
  name:string,
  email:string,
  birtgDate:Date,
  facultyName:string,
}

