import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  token: any = null;
  constructor(private router: Router) {
    this.token = sessionStorage.getItem("token");
  }

  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(["/login/user"]);
    // setTimeout(() => {
    // }, 1500);
  }
}
