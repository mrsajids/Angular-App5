import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostServiceService {
  private apiUrl = "http://stage.indtrack.co.in:8080/indvtsbackendapi/iitfmsweighingdetails"; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  weining_details() {
    return this.http.post(
      this.apiUrl,
      {
        pageNo: 1,
        itemPerPage: 10,
        searchType: "",
        searchby: "",
        pageURL: "/pages/iitfmsmasters/weighingdetails",
        pageName: "/pages/iitfmsmasters/weighingdetails",
      },
      {
        headers: {
          headerkey:
            "idfUM93+FmGk7iN8E3tmPTJStJYwt9lpjgKQ2r3+xNUOuY9CBZXT8+1bGt1W6tNIpeFwKeumguAaGmsmTrHteJJhLJbQa+cw2Ex5xvnclN6DE5HlJdfk1EG8uZKV6YVAvpkHfjpjAiD78wKqqSeK5e1oxbayFVvwlOCBZSb0XAGmSrsAeip5SnCCOo31xcMvo7Jjmw7lIxeACBZSz1rletvRS2CEtlt0q7SF933GH5NAJov8ETQRDgTU2TYFtHeHXjJXcn+ySlacAs+kvD7gij2oeSWAEQUEQU",
        },
      }
    );
  }
}
