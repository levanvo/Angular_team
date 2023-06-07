import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Interface/category';
import { IProduct } from 'src/app/Interface/product';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductsService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    image: "",
    des: ""
  }
  category: ICategory[] = []
  constructor(private productService: ProductsService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCate().subscribe(cate => {
      this.category = cate
    })
  }
  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(product => {
      this.product = product
      this.router.navigate(['/admin/product'])
    })
  }
}
