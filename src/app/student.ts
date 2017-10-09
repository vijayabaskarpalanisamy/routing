export class Student{
  id: number;
  name: string;
  phoneno: string;
  department: number;
  city: string;
  email: string;
   constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
