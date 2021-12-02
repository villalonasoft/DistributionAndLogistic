import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-presentation',
  templateUrl: './reportpresentation.component.html',
  styleUrls: ['./reportpresentation.component.css']
})
export class ReportPresentationComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'codigo', 'departamento', 'marca','suplidor','costo','margen','itbis','precio','factor','unidad'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
