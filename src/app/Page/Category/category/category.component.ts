import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  category: ICategory[] = []
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCate().subscribe(cate => {
      this.category = cate
    })
  }

  removeItem(id: any) {
    this.categoryService.deleteCate(id).subscribe(category => {
      this.category = this.category.filter(item => item.id != id)

    })
    alert("Đã xóa")
  }
}
