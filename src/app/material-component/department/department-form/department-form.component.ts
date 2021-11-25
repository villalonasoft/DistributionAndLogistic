import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { NgForm } from '@angular/forms';
import { department } from 'src/app/models/department.model';


@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  constructor(
    public service:DepartmentService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
      this.insertRecord(form);
  }
  insertRecord(form:NgForm){
    this.service.postDepartment();
    this.service.refreshList();
    this.resetForm(form);
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new department();
  }
}
