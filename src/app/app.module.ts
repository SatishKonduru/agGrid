import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import {AgGridModule} from 'ag-grid-angular';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortComponent } from './components/sort/sort.component';
import { RowSelectionComponent } from './components/row-selection/row-selection.component'
import { HttpClientModule } from '@angular/common/http';
import { RemoteDataComponent } from './components/remote-data/remote-data.component';
import { GetDataService } from './services/get-data.service';
import { ValueGetterComponent } from './components/value-getter/value-getter.component';
import { UpdateRowDataComponent } from './components/update-row-data/update-row-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidenavComponent,
    FilterComponent,
    SortComponent,
    RowSelectionComponent,
    RemoteDataComponent,
    ValueGetterComponent,
    UpdateRowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
