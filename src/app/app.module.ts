
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

//common area
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

//company area
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';

//client area
import { ClientSidebarComponent } from './layouts/client/sidebar/sidebar.component';
import { ClientHeaderComponent } from './layouts/client/header/header.component';
import { ClientComponent } from './layouts/client/client.component';


import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    ClientComponent,
    ClientSidebarComponent,
    ClientHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
