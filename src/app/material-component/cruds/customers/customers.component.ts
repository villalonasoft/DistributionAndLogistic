import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchView } from 'src/app/models/branchVIew.model';
import { BranchService } from 'src/app/shared/Rest/branch.service';
import {UUID} from 'angular2-uuid';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  branchServices:BranchService;
  constructor(_branchServices:BranchService,private _snackBar:MatSnackBar) {
    this.branchServices = _branchServices;
   }

   ngOnInit(): void {
     this.changeKey();
   }
   onSubmit(form:NgForm){
    if(this.branchServices.form.id==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
   }
   async insertRecord(form:NgForm){
     await this.branchServices.post()?this.resetForm(form):this._snackBar.open("ERROR",'',{horizontalPosition:'center',verticalPosition:'top',duration:3000});
   }

   async updateRecord(form:NgForm){
    await this.branchServices.put()?this.resetForm(form):this._snackBar.open("ERROR",'',{horizontalPosition:'center',verticalPosition:'top',duration:3000});
  }

   resetForm(form:NgForm){
    form.form.reset();
    this.branchServices.form = new BranchView();
    this.branchServices.get();
    this.changeKey();
  }

  changeKey(){
    this.branchServices.form.apiKey = UUID.UUID();
  }
}
