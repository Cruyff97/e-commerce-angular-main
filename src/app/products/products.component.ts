import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { products, ProductService } from 'src/app/products/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  productes:any;
  constructor( private ServiceProduct: ProductService, private router: Router ) { }

  ngOnInit(): void {
    
    this.ServiceProduct.getProducts()
    .subscribe(productes => this.productes=productes)
     ;
 
  }
  sendObjects(product: any) {
    this.router.navigate(['products/details/' + product.id], {
      state: {
        product: JSON.stringify(product),
      },
    });
  }

}


