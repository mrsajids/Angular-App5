import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MastersRoutingModule } from "./masters-routing.module";
import { StudentComponent } from "./student/student.component";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    FormsModule, // this should be in shared module,
    NgSelectModule, // this should be in shared module
    MastersRoutingModule,
  ],
})
export class MastersModule {}
