import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Products } from '../products.model';
import { Observable } from 'rxjs';
import { products } from '../products.service';
export interface productsDetails {
  name:string ;

  img:string ;
}
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
   productsDetailsCollection?:AngularFirestoreCollection<Products>;
  productsDetails: Observable<products[]>
  constructor(private prd: AngularFirestore) {
    this.productsDetails=this.prd.collection<products>('products').valueChanges()
   }
  getProductsDetails():Observable<any>{
    return this.productsDetails
    
}}
