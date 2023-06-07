import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Interface/category';
import { IProduct } from 'src/app/Interface/product';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductsService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    image: "",
    des: ""
  }
  category: ICategory[] = []
  constructor(private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProductById(id).subscribe(product => {
        this.product = product
      })
    })

    this.categoryService.getCate().subscribe(cate => {
      this.category = cate
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(product => {
      this.product = product
      this.router.navigate(['/admin/product'])
      alert("Cập nhật thành công")
    })
  }
}
