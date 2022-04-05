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

const MENUITEMS = [
  {
    name:"Entrada De Datos",
    submenu:[
      // { state: 'presentation',type: 'link', name: 'Presentaciones',  icon: 'av_timer'},
      // { state: 'product', type: 'link', name: 'Productos', icon: 'crop_7_5'},
      // { state: 'customer', type: 'link', name: 'Clientes', icon: 'view_comfy'},
      // { state: 'pickers', type: 'link', name: 'Pickers', icon: 'view_list'},
      // { state: 'units', type: 'link', name: 'Unidades', icon: 'view_headline'},
      // { state: 'taxes', type: 'link', name: 'Impuestos', icon: 'tab'},
      // { state: 'supplier', type: 'link', name: 'Supplidores', icon: 'web'},
      // { state: 'department', type: 'link', name: 'Departamento', icon: 'web'},
      // { state: 'brand', type: 'link', name: 'Marcas', icon: 'web'},
      // { state: 'brand', type: 'link', name: 'Clientes', icon: 'web'},
      // { state: 'brand', type: 'link', name: 'Almacenes', icon: 'web'},
    ]
  },
  {
    name:"Transacciones",
    submenu:[
      // { state: 'brand', type: 'link', name: 'Act. de precios', icon: 'web'},
      { state: 'gestion', name: 'Gestionar Ordenes', type: 'link', icon: 'av_timer'},
      { state: 'orders', type: 'link', name: 'Recepcion de pedidos', icon: 'crop_7_5'},
      // { state: 'grid', type: 'link', name: 'Ajustes de inventario', icon: 'view_comfy'},
      // { state: 'lists', type: 'link', name: 'Facturacion', icon: 'view_list'},
      // { state: 'menu', type: 'link', name: 'Despacho', icon: 'view_headline'},
      // { state: 'tabs', type: 'link', name: 'Rutas', icon: 'tab'},
      // { state: 'stepper', type: 'link', name: 'Ubicacion de productos', icon: 'web'},
    ]
  },
  {
    name:"Reportes",
    submenu:[
      // { state: 'presentation',type: 'link', name: 'Cambios de costo',  icon: 'av_timer'},
      // { state: 'product', type: 'link', name: 'Ventas', icon: 'crop_7_5'},
      // { state: 'customer', type: 'link', name: 'Inventario', icon: 'view_comfy'},
      // { state: 'pickers', type: 'link', name: 'Pedidos', icon: 'view_list'},
      // { state: 'units', type: 'link', name: 'Cliente-Pedido', icon: 'view_headline'},
      // { state: 'taxes', type: 'link', name: 'Compras', icon: 'tab'},
      // { state: "reportpresentation", type: 'link', name: 'Productos', icon: 'web'},
      // { state: 'brand', type: 'link', name: 'Marcas', icon: 'web'},
    ]
  },
  {
    name:"Controles",
    submenu:[
      // { state: 'presentation',type: 'link', name: 'Reubicar Producto',  icon: 'av_timer'},
      // { state: 'product', type: 'link', name: 'Dividir zona', icon: 'crop_7_5'},
      // { state: 'customer', type: 'link', name: 'Reasignar pedido', icon: 'view_comfy'},
      // { state: 'pickers', type: 'link', name: 'Mover Pedido', icon: 'view_list'},
    ]
  },
  {
    name:"Utilitarios",
    submenu:[
      // { state: 'presentation',type: 'link', name: 'Presentaciones',  icon: 'av_timer'},
    ]
  },
  {
    name:"Ayuda",
    submenu:
    [
      // {
      //   state: 'expansion',
      //   type: 'link',
      //   name: 'Base de conocimiento',
      //   icon: 'vertical_align_center'
      // },
      // { state: 'chips', type: 'link', name: 'Documentacion', icon: 'vignette'},
      // { state: 'chips', type: 'link', name: 'Leira Asistent', icon: 'vignette'},
    ]
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Parent[] {
    return MENUITEMS;
  }
}
