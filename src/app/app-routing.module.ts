import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RemoteDataComponent } from './components/remote-data/remote-data.component';
import { RowSelectionComponent } from './components/row-selection/row-selection.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SortComponent } from './components/sort/sort.component';
import { UpdateRowDataComponent } from './components/update-row-data/update-row-data.component';
import { ValueGetterComponent } from './components/value-getter/value-getter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', //localhost:4200/home
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'rowSelection',
    component: RowSelectionComponent
  },
  {
    path: 'remoteData',
    component: RemoteDataComponent
  },
  {
    path: 'valueGetter',
    component: ValueGetterComponent
  },
  {
    path: 'updateRowData',
    component: UpdateRowDataComponent
  },




  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
