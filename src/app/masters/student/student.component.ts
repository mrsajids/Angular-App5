import { Component } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrl: "./student.component.scss",
})
export class StudentComponent {
  student = [
    {
      rowno: 1,
      name: "Sdks",
      email: "sdk@gmail.com",
      description: "description",
    },
    {
      rowno: 2,
      name: "Sdks 2",
      email: "sdk2@gmail.com",
      description: "description 2",
    },
  ];
}
