import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  category: ICategory = {
    name: ""
  }
  constructor(private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.categoryService.getCateById(id).subscribe(category => {
        this.category = category
      })
    })
  }
  onHandleSubmit() {
    this.categoryService.updateCate(this.category).subscribe(category => {
      this.category = category
      this.router.navigate(['/admin/category'])
    })
    alert("Update thành công")
  }

}
