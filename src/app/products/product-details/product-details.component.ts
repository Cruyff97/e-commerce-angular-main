import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../products.service';
import { ProductDetailsService } from './product-details.service';
import { CartService } from 'src/app/cart.service';
import { Products, products } from '../products.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
index!:number;
ProductDetails:any;
productes:any;
product!:products
nameProducts:string|undefined;
  constructor(private route: ActivatedRoute,private cartService: CartService, private ServiceProduct: ProductDetailsService, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      let routerState = this.router.getCurrentNavigation()?.extras.state;
      if (routerState) {
        this.ProductDetails = routerState['product'] ? JSON.parse(routerState['product']) : [];
        console.log(this.ProductDetails)
      }
    }
   }

  ngOnInit(): void {
   
  
   }

  addToCart(product: products){
    this.cartService.addToCart(product);
    let buttonCart= document.querySelectorAll('button')
    buttonCart?.forEach(buttonCart =>{
    if(!buttonCart.classList.contains('loading')) {

        buttonCart.classList.add('loading');

        setTimeout(() => buttonCart.classList.remove('loading'), 3700);

    }
    
});

  
    }    }


