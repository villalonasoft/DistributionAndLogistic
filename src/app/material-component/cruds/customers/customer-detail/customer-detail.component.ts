import { Component, OnInit } from '@angular/core';
import { BranchView } from 'src/app/models/branchVIew.model';
import { BranchService } from 'src/app/shared/Rest/branch.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(
    public branchService:BranchService
    ) { }

  ngOnInit(): void {
    this.branchService.get();
  }

  populateForm(selectedRecord:BranchView){
    this.branchService.form = Object.assign({},selectedRecord);
  }
}
