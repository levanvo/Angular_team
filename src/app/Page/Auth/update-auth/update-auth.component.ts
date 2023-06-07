import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuth } from 'src/app/Interface/auth';

import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-update-auth',
  templateUrl: './update-auth.component.html',
  styleUrls: ['./update-auth.component.scss']
})
export class UpdateAuthComponent {
  auth: IAuth = {
    name: "",
    email: "",
    pass: ""
  }
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.authService.getAuthById(id).subscribe(auth => {
        this.auth = auth
      })
    })
  }
  onHandleSubmit() {
    this.authService.updateAuth(this.auth).subscribe(auth => {
      this.auth = auth
      this.router.navigate(['/admin/auth'])
    })
    alert("Update thành công")
  }

}
