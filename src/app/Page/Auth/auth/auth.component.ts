import { Component } from '@angular/core';
import { IAuth } from 'src/app/Interface/auth';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  auth: IAuth[] = []
  constructor(private authService: AuthService) {
    this.authService.getAuth().subscribe(auth => {
      this.auth = auth
    })
  }
  removeItem(id: any) {
    this.authService.deleteAuth(id).subscribe(auth => {
      this.auth = this.auth.filter(item => item.id != id)
    })
    alert("Đã xóa")
  }
}
