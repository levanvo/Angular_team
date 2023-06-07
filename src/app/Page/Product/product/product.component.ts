import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interface/product';
import { ProductsService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: IProduct[] = []
  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe(product => {
      this.product = product
    })
  }

  removeItem(id: any) {
    this.productService.deletaProduct(id).subscribe(() => [
      this.product = this.product.filter(item => item.id != id)

    ])
    alert("Đã xóa")
  }
}
