import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import {HeaderComponent} from "../../components/header/header.component";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        HeaderComponent,

    ]
})
export class DashboardModule { }
