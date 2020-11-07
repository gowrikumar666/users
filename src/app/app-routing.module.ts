import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniqueappComponent } from './uniqueapp/uniqueapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ByconstructionComponent } from './byconstruction/byconstruction.component';
import { ExcelComponent } from './excel/excel.component';
import { InfosysTaskComponent } from './infosys-task/infosys-task.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
   {path: 'users', component: UsersComponent},
   /* {path: 'excel', component: ExcelComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
