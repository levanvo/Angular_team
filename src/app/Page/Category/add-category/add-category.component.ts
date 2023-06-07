import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  category: ICategory = {
    name: ""
  }
  constructor(private categoryService: CategoryService,
    private router: Router) { }
  onHandleSubmit() {
    this.categoryService.addCate(this.category).subscribe(category => {
      this.category = category
      this.router.navigate(['/admin/category'])
    })
    alert("Thêm thành công")
  }
}
