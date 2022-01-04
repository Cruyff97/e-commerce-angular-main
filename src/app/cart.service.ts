import { Injectable } from '@angular/core';
import { Products } from './products/products.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
    productsCart: Products[] = [];
  /* . . . */
  
    addToCart(product: Products) {
      this.productsCart.push(product);
    }
  
    getItems() {
      return this.productsCart;
    }
  
    clearCart() {
      this.productsCart = [];
      return this.productsCart;
    }
  constructor() { }
}
