import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent {
  ValueSearch: string = "";//value search
  DataUser_Signin_up: any = {
    o: "ok"
  };

  constructor(
    private http: ServiceService,
  ) {
    this.http.AllAuthor().subscribe((dataAuthor: any) => {
      dataAuthor.data.map((itemUser: any) => {
        if (itemUser.status == true) {
          this.DataUser_Signin_up = itemUser;
          console.log(itemUser);
        };
      });
    });
  };
  Search() {
    console.log(this.DataUser_Signin_up.status);

  }
  LogOut(idLogOut: any) {
    const consider = window.confirm("Are you sure !");
    if (consider) {
      this.http.GetOneAuthor(idLogOut).subscribe((dataOne: any) => {
        console.log(dataOne.data.status);
        dataOne.data.status = false;
        this.http.updateAuthor(dataOne.data).subscribe();
        window.location.href="";
      });
    };
  };






};
