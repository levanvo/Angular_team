import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // Products
  getAllPrLimit(limit:any,page:any,oder:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/prlimit?_limit=${limit}?_page=${page}?_oder=${oder}`);
  };
  getAllPr():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/pr`);
  };
  getOnePr(_id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/pr/${_id}`);
  };
  addPr(data:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8080/pr`,data);
  };
  updatePr(data:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8080/pr/${data._id}`,data);
  };
  removePr(_id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8080/pr/${_id}`);
  };


  // Categories
  getAllCt():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/ct`);
  };
  getOneCt(_id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/ct/${_id}`);
  };
  addCt(data:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8080/ct`,data);
  };
  updateCt(data:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8080/ct/${data._id}`,data);
  };
  removeCt(_id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8080/ct/${_id}`);
  };



  // Author
  Signup(data:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8080/signup`,data);
  };
  Signin(data:any){
    return this.http.post(`http://localhost:8080/sigin`,data);
  };
  AllAuthor():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/allUsers`);
  };
  GetOneAuthor(_id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/oneUser/${_id}`);
  };
  RemoveAuthor(_id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8080/removeUser/${_id}`);
  };
  updateAuthor(data:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8080/updateUser/${data._id}`,data);
  };
}
