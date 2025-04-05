import { Component, OnInit } from "@angular/core";
import { PostServiceService } from "../../shared/service/post-service.service";
import { RootResponse } from "../../shared/model/apiresponse.model";
import { SharedService } from "../../shared/service/shared.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrl: "./student.component.scss",
})
export class StudentComponent implements OnInit {
  public departmentDetailsResponse: RootResponse = new RootResponse();

  constructor(public ps: PostServiceService, public ss: SharedService) {}

  ngOnInit(): void {
    console.log("OnInit");
    this.getWeighningDetails();
  }

  getWeighningDetails() {
    this.ss.addLoader();
    this.ps.weining_details().subscribe((response: any) => {
      let departmentDetailsResponse = response as RootResponse;
      if (response.statuscode == 200) {
        this.departmentDetailsResponse = departmentDetailsResponse;
        this.departmentDetailsResponse.entity.recordfrom =
          this.departmentDetailsResponse.entity.weighingdetails[0].rowno;

        this.departmentDetailsResponse.entity.recordto =
          this.departmentDetailsResponse.entity.weighingdetails[
            this.departmentDetailsResponse.entity.weighingdetails.length - 1
          ].rowno;
      }
      setTimeout(() => {
        this.ss.removeLoader();
      }, 1000);
    });
  }

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
