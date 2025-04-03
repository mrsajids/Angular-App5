import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";

import { FormRoutingModule } from "./form-routing.module";
import { FormsModule } from "@angular/forms";
import { TemplateFormComponent } from "./template-form/template-form.component";

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule, FormRoutingModule, FormsModule, NgSelectModule],
})
export class FormModule {}
