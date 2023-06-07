import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/Interface/auth';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-add-auth',
  templateUrl: './add-auth.component.html',
  styleUrls: ['./add-auth.component.scss']
})
export class AddAuthComponent {
  auth: IAuth = {
    name: "",
    email: "",
    pass: ""

  }
  constructor(private authService: AuthService,
    private router: Router) { }
  onHandleSubmit() {
    this.authService.addAuth(this.auth).subscribe(auth => {
      this.auth = auth
      this.router.navigate(['/admin/auth'])
    })
    alert("Đã thêm")
  }
}
