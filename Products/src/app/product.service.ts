import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient ){ }

  getbook(id) {
    // console.log(id)
    return this.http.get("http://localhost:5001/book/"+id);
    
  }

  
  newProduct(item) {
    return this.http.post("http://localhost:5001/insert",{"book":item})
    .subscribe(data=>{console.log})

    
  }

  
  getProducts(){
    return this.http.get("http://localhost:5001/books");
  }
  editbook(book)
  {
    console.log('client update')
    console.log(book)
    return this.http.put("http://localhost:5001/update",book)
    .subscribe(data =>{console.log(data)})
  }


  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:5001/remove/"+id)

  }
  
}
