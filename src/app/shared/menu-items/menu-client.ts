import { Injectable } from '@angular/core';

export interface Parent{
  name:string,
  submenu:Menu[]
}
export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUCLIENT = [
      { state: 'pedidos',type: 'link', name: 'Generar Pedido',  icon: 'av_timer'},
      { state: 'consult',type: 'link', name: 'Consultar Estado',  icon: 'av_timer'}
];

@Injectable()
export class MenuClient {
  getMenuitem(): Menu[] {
    return MENUCLIENT;
  }
}
