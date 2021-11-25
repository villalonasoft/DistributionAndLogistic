import { Injectable } from '@angular/core';
import { department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  seed:department[] = [
    {
      id:1,
      name:"Cuidado de la piel"
    },
    {
      id:2,
      name:"Salud"
    },
    {
      id:3,
      name:"Controlados"
    }
  ];
  formData:department = new department();
  list:department[]=new Array();

  postDepartment(){
    console.log(this.formData)
    this.seed.push(this.formData);
    console.log(this.seed)
  }

  putDeparment(){
    return;
  }

  deleteDeparment(id:number){
    return;
  }

  refreshList(){
    this.list = this.seed;
  }
}
