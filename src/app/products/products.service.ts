import { Injectable } from '@angular/core';
import { Products } from './products.model'; 
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
export interface products {
  name:string ;

  img:string ;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  productsCollection?:AngularFirestoreCollection<Products>;
  products: Observable<products[]>
  constructor(private prd: AngularFirestore) {
    this.products=this.prd.collection<products>('products').valueChanges()
   }
  getProducts():Observable<any>{
    return this.products
    
  }
}
