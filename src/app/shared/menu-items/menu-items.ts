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
      { state: 'presentation',type: 'link', name: 'Presentaciones',  icon: 'av_timer'},
      { state: 'product', type: 'link', name: 'Productos', icon: 'crop_7_5'},
      { state: 'customer', type: 'link', name: 'Clientes', icon: 'view_comfy'},
      { state: 'pickers', type: 'link', name: 'Pickers', icon: 'view_list'},
      { state: 'units', type: 'link', name: 'Unidades', icon: 'view_headline'},
      { state: 'taxes', type: 'link', name: 'Impuestos', icon: 'tab'},
      { state: 'supplier', type: 'link', name: 'Supplidores', icon: 'web'},
      { state: 'department', type: 'link', name: 'Departamento', icon: 'web'},
      { state: 'brand', type: 'link', name: 'Marcas', icon: 'web'},
    ]
  },
  {
    name:"Transacciones",
    submenu:[
      { state: 'dashboard', name: 'Home', type: 'link', icon: 'av_timer'},
      { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5'},
      { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy'},
      { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list'},
      { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline'},
      { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab'},
      { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web'},
    ]
  },
  {
    name:"Reportes",
    submenu:[
      { state: 'presentation',type: 'link', name: 'Presentaciones',  icon: 'av_timer'},
      { state: 'product', type: 'link', name: 'Productos', icon: 'crop_7_5'},
      { state: 'customer', type: 'link', name: 'Clientes', icon: 'view_comfy'},
      { state: 'pickers', type: 'link', name: 'Pickers', icon: 'view_list'},
      { state: 'units', type: 'link', name: 'Unidades', icon: 'view_headline'},
      { state: 'taxes', type: 'link', name: 'Impuestos', icon: 'tab'},
      { state: 'supplier', type: 'link', name: 'Supplidores', icon: 'web'},
      { state: 'department', type: 'link', name: 'Departamento', icon: 'web'},
      { state: 'brand', type: 'link', name: 'Marcas', icon: 'web'},
    ]
  },
  {
    name:"Controles",
    submenu:[
      { state: 'presentation',type: 'link', name: 'Presentaciones',  icon: 'av_timer'},
      { state: 'product', type: 'link', name: 'Productos', icon: 'crop_7_5'},
      { state: 'customer', type: 'link', name: 'Clientes', icon: 'view_comfy'},
      { state: 'pickers', type: 'link', name: 'Pickers', icon: 'view_list'},
      { state: 'units', type: 'link', name: 'Unidades', icon: 'view_headline'},
      { state: 'taxes', type: 'link', name: 'Impuestos', icon: 'tab'},
      { state: 'supplier', type: 'link', name: 'Supplidores', icon: 'web'},
      { state: 'department', type: 'link', name: 'Departamento', icon: 'web'},
      { state: 'brand', type: 'link', name: 'Marcas', icon: 'web'},
    ]
  },
  {
    name:"Utilitarios",
    submenu:[
      { state: 'presentation',type: 'link', name: 'Presentaciones',  icon: 'av_timer'},
      { state: 'product', type: 'link', name: 'Productos', icon: 'crop_7_5'},
      { state: 'customer', type: 'link', name: 'Clientes', icon: 'view_comfy'},
      { state: 'pickers', type: 'link', name: 'Pickers', icon: 'view_list'},
      { state: 'units', type: 'link', name: 'Unidades', icon: 'view_headline'},
      { state: 'taxes', type: 'link', name: 'Impuestos', icon: 'tab'},
      { state: 'supplier', type: 'link', name: 'Supplidores', icon: 'web'},
      { state: 'department', type: 'link', name: 'Departamento', icon: 'web'},
      { state: 'brand', type: 'link', name: 'Marcas', icon: 'web'},
    ]
  },
  {
    name:"Ayuda",
    submenu:
    [
      {
        state: 'expansion',
        type: 'link',
        name: 'Expansion Panel',
        icon: 'vertical_align_center'
      },
      { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette'},
      { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail'},
      {
        state: 'progress-snipper',
        type: 'link',
        name: 'Progress snipper',
        icon: 'border_horizontal'
      },
      {
        state: 'progress',
        type: 'link',
        name: 'Progress Bar',
        icon: 'blur_circular'
      },
      {
        state: 'dialog',
        type: 'link',
        name: 'Dialog',
        icon: 'assignment_turned_in'
      },
      { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant',child: 'fill' },
      { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb',child: 'fill' },
      { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode'},
      {
        state: 'slide-toggle',
        type: 'link',
        name: 'Slide Toggle',
        icon: 'all_inclusive'
      }
    ]
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Parent[] {
    return MENUITEMS;
  }
}
