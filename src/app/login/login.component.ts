import { Component } from "@angular/core";
import { User } from "./UserModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  userObj!: User;
  constructor(private router: Router) {
    this.userObj = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: "",
    };
  }
  public alphabetWithoutSpace(event: any) {
    return (
      (event.charCode > 64 && event.charCode < 91) ||
      (event.charCode > 96 && event.charCode < 123)
    );
  }

  onSubmit(values: any) {
    console.log(values.value);
    sessionStorage.setItem("token", values.value.username);
    this.router.navigate(["/dashboard"]);
  }
}
