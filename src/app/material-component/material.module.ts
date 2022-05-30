import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
//import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { OrderworkComponent } from './transactions/orderwork/orderwork.component';
import { OrderReceptionComponent } from './transactions/order-reception/order-reception.component';
import { ModalComponent } from './transactions/orderwork/modal/modal.component';
import { ModalHeaderComponent } from './transactions/order-reception/modal/modal-header.component';
import { DashboarComponent } from './dashboar/dashboar.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserComponent } from './cruds/user/user.component';
import { DetailComponent } from './cruds/user/detail/detail.component';
import { CustomersComponent } from './cruds/customers/customers.component';
import { CustomerDetailComponent } from './cruds/customers/customer-detail/customer-detail.component';
import { WarehouseComponent } from './cruds/warehouse/warehouse.component';
import { WharehouseDetailComponent } from './cruds/warehouse/wharehouse-detail/wharehouse-detail.component';
import { UnitComponent } from './cruds/unit/unit.component';
import { ModeComponent } from './cruds/mode/mode.component';
import { StockComponent } from './reports/stock/stock.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TwoFactorModalComponent } from './cruds/user/two-factor-modal/two-factor-modal.component';

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
    //CdkTableModule,
    QRCodeModule
  ],
  providers: [],
  declarations: [
    ModalComponent,
    ModalHeaderComponent,
    OrderworkComponent,
    OrderReceptionComponent,
    DashboarComponent,
    UserComponent,
    DetailComponent,
    CustomersComponent,
    CustomerDetailComponent,
    WarehouseComponent,
    WharehouseDetailComponent,
    UnitComponent,
    ModeComponent,
    StockComponent,
    TwoFactorModalComponent,
  ]
})
export class MaterialComponentsModule { }
