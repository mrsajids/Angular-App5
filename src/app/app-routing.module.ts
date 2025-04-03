import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "/login/user", pathMatch: "full" },
      // if i open http://localhost:4200 then it will redirect to /login
      {
        path: "login/:id",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "",
        loadChildren: () =>
          import("./layout/layout.module").then((m) => m.LayoutModule),
      },
      { path: "**", redirectTo: "dashboard" },
      // { path: '**', redirectTo: 'masters' }
    ],

    // canActivate : [AuthGuard]  ,
    // canDeactivate : [RouterGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
