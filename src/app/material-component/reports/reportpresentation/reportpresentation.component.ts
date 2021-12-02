import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-presentation',
  templateUrl: './reportpresentation.component.html',
  styleUrls: ['./reportpresentation.component.css']
})
export class ReportPresentationComponent implements AfterViewInit {
  displayedColumns: string[] = ['codigo', 'name', 'departamento', 'marca','suplidor','costo','margen','itbis','precio','factor','unidad'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue:string){
    filterValue = filterValue.trim().toLocaleLowerCase();
    console.log(filterValue);
  }
}

export interface PeriodicElement {
  name: string;
  codigo: string;
  departamento: string;
  marca: string;
  suplidor:string
  costo:number,
  margen:number,
  itbis:number,
  precio:number,
  factor:number,
  unidad:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534.00,factor: 1,unidad:"caja"},
  {codigo: '00015262', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015263', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015264', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015265', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015266', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015267', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015268', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015269', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015210', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015211', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015212', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015213', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015214', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015215', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015216', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015217', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015118', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015219', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015220', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},
  {codigo: '00015261', name: 'Hydrogen',departamento:"salud",marca:"Generic",suplidor:"Sued",costo:1000.00,margen:30,itbis:18,precio:1534,factor: 1,unidad:"caja"},

];
