import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniqueappComponent } from './uniqueapp/uniqueapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ByconstructionComponent } from './byconstruction/byconstruction.component';
import { ExcelComponent } from './excel/excel.component';
import { InfosysTaskComponent } from './infosys-task/infosys-task.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniqueappComponent,
    DashboardComponent,
    ByconstructionComponent,
    ExcelComponent,
    InfosysTaskComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
