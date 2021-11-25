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
    this.formData.id = this.seed.length+1;
    this.seed.push({...this.formData});
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
