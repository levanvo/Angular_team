import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAuth } from 'src/app/Interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuth(): Observable<IAuth[]> {
    return this.http.get<IAuth[]>(`http://localhost:3000/auth`)
  }
  getAuthById(id: any): Observable<IAuth> {
    return this.http.get<IAuth>(`http://localhost:3000/auth/${id}`)
  }
  addAuth(auth: IAuth): Observable<IAuth> {
    return this.http.post<IAuth>(`http://localhost:3000/auth`, auth)
  }
  deleteAuth(id: any): Observable<IAuth> {
    return this.http.delete<IAuth>(`http://localhost:3000/auth/${id}`)
  }
  updateAuth(auth: IAuth): Observable<IAuth> {
    return this.http.put<IAuth>(`http://localhost:3000/auth/${auth.id}`, auth)
  }
}
