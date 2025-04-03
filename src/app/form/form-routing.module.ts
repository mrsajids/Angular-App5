import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateFormComponent } from "./template-form/template-form.component";

const routes: Routes = [
  {
    path: "template-form",
    component: TemplateFormComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
