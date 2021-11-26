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
      { state: 'home',type: 'link', name: 'Home',  icon:"home"},
      { state: 'ordenar',type: 'link', name: 'Realizar Pedido',  icon: 'add_shopping_cart'},
      { state: 'lista-pedidos',type: 'link', name: 'Listado de pedidos',  icon: 'view_list'}
];

@Injectable()
export class MenuClient {
  getMenuitem(): Menu[] {
    return MENUCLIENT;
  }
}
