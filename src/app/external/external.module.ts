import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ExternalComponent } from './external.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { ExternalRoutes } from './external.routing';
import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ExternalComponent,
    OrderComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ExternalRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  exports:[RouterModule]
})
export class ExternalModule { }
