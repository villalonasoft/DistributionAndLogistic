import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { OrderworkComponent } from './transactions/orderwork/orderwork.component';
import { OrderReceptionComponent } from './transactions/order-reception/order-reception.component';
import { ModalComponent } from './transactions/orderwork/modal/modal.component';
import { ModalHeaderComponent } from './transactions/order-reception/modal/modal-header.component';
import { DashboarComponent } from './dashboar/dashboar.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    SweetAlert2Module.forRoot(),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ModalComponent,
    ModalHeaderComponent,
    OrderworkComponent,
    OrderReceptionComponent,
    DashboarComponent,
  ]
})
export class MaterialComponentsModule {}
