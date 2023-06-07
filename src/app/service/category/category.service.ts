import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { ICategory } from 'src/app/Interface/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private Http: HttpClient) { }

  getCate(): Observable<ICategory[]> {
    return this.Http.get<ICategory[]>(`http://localhost:3000/category`)
  }
  getCateById(id: any): Observable<ICategory> {
    return this.Http.get<ICategory>(`http://localhost:3000/category/${id}`)
  }
  addCate(category: ICategory): Observable<ICategory> {
    return this.Http.post<ICategory>(`http://localhost:3000/category`, category)
  }
  deleteCate(id: any): Observable<ICategory> {
    return this.Http.delete<ICategory>(`http://localhost:3000/category/${id}`)
  }
  updateCate(category: ICategory): Observable<ICategory> {
    return this.Http.put<ICategory>(`http://localhost:3000/category/${category.id}`, category)
  }
}
