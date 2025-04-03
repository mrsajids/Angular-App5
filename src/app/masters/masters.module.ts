import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
