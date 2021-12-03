import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Products{
  code:string;
  name:string;
}

@Component({
  selector: 'app-create-order-form',
  templateUrl: './create-order-form.component.html',
  styleUrls: ['./create-order-form.component.css']
})
export class CreateOrderFormComponent implements OnInit {
  myControl = new FormControl();
  options: Products[] = [
    {code:'00000101',name:'aspirina'},
    {code:'00000102',name:'winasord'},
    {code:'00000103',name:'sumigran'},
    {code:'00000104',name:'sumigran plus'},
    {code:'00000105',name:'frisilicon'},
    {code:'00000106',name:'ovulos'},
    {code:'00000107',name:'papitas'},]

    filteredOptions!: Observable<Products[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(product:Products):string{
    return product && product.code ? product.code+" - "+product.name:'';
  }

  private _filter(name:string):Products[]{
    const filterValue = name.toLocaleLowerCase();

    return this.options.filter(option => option.name.toLocaleLowerCase().includes(filterValue) || option.code.toLocaleLowerCase().includes(filterValue))
  }

}
