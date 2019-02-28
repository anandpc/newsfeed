import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ListEmployeeComponent } from '../employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeeComponent},
  {path: 'create',component: CreateEmployeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }