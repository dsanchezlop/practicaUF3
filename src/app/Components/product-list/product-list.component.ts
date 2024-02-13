import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { CartService } from '../../Services/cart.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  currentPage: number;
  pageSize: number;
  @Input() nameFilter: string;
  minPriceFilter: number;
  maxPriceFilter: number;
  priceOptions: number[] = Array.from({length: 11}, (_, i) => i * 10);
  filteredProducts: Product[];
  allCategories: string[];
  categoryFilter: string;
  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.currentPage = 1;
    this.pageSize = 5;
    this.nameFilter = '';
    this.minPriceFilter = 0;
    this.maxPriceFilter = 100;
    this.filteredProducts = productsService.getProducts();
    this.allCategories = productsService.getCategories();
    this.categoryFilter = '';
  }


  /**
   * Function that gets called to filter the products based on user parameters
   */
  filterProducts(): void {
    this.filteredProducts = this.productsService.getProducts();

    this.filterProductsByName();
    this.filterProductsByPrice();
    this.filterProductsByCategory();
  }

  /**
   * Function that filters the products based on the nameFilter
   */
  filterProductsByName(): void {
    this.filteredProducts = this.filteredProducts.filter((product) => {
      if(product.name.toLowerCase().includes(this.nameFilter.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    })
  };

  filterProductsByPrice(): void {
    this.filteredProducts = this.filteredProducts.filter((product) => {
      return product.price >= this.minPriceFilter && product.price <= this.maxPriceFilter;
    });
  }

  filterProductsByCategory(): void {
    if (this.categoryFilter) {
      this.filteredProducts = this.filteredProducts.filter((product) => {
        return product.category.name === this.categoryFilter;
      });
    }
  }

  ngOnInit(): void {
    this.filteredProducts = this.productsService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // removeFromCart(product: Product) {
  //   this.cartService.removeFromCart(product);
  // }
}
