import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title:String = "Books";

  books: ProductModel[];

  imageWidth:number = 50;
  imageMargin: number = 2;
  constructor( private productService:ProductService,private router:Router ){

  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  editProduct(book:any)
    {
      localStorage.setItem("editbookId", book._id.toString());
      // console.log(book._id);
      this.router.navigate(['update']);
  
    }

    deleteProduct(book)
  {
    this.productService.deleteProduct(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
  

  }

  

}
