import { Component } from "@angular/core";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrl: "./template-form.component.scss",
})
export class TemplateFormComponent {
  userDetails = {
    name: "",
    email: "",
    address: "",
    mobile: "",
    age: null,
    gender: "",
    password: "",
    selectedState: null,
    selectedCity: null,
  };

  selectedState: any = null; // Keep it unselected by default
  selectedCity: any = null; // Keep it unselected by default

  stateList = [
    { id: "1", name: "Maharashtra" },
    { id: "2", name: "UP" },
    { id: "3", name: "MP" },
    { id: "4", name: "Telangana" },
  ];

  cityList = [
    { id: "1", name: "Nagpur" },
    { id: "2", name: "Amravati" },
    { id: "3", name: "Yevatmal" },
    { id: "4", name: "Hyderabad" },
  ];

  public alphabetWithoutSpace(event: any) {
    return (
      (event.charCode > 64 && event.charCode < 91) ||
      (event.charCode > 96 && event.charCode < 123)
    );
  }

  public alphanumericWithSpace(evt: any) {
    // Only ASCII character in that range allowed
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (
      (ASCIICode >= 48 && ASCIICode <= 57) ||
      (ASCIICode >= 65 && ASCIICode <= 90) ||
      (ASCIICode >= 97 && ASCIICode <= 122) ||
      ASCIICode == 32
    )
      return true;
    return false;
  }

  onSubmit(values: any) {
    console.log(values.value);
  }

  stateChange() {
    console.log("selectedCar=>" + this.userDetails.selectedState);
  }
  cityChange() {
    console.log("selectedCar" + this.userDetails.selectedCity);
  }
}
