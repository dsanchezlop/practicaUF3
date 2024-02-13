import { Component } from '@angular/core';
import { ProductsService } from './Services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaUF3';
  constructor(private productsService: ProductsService) {
    productsService.getProducts();
  }
}
