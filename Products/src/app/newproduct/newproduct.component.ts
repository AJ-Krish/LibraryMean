import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  title:String = "Add Product";


  constructor( private productService:ProductService,private router: Router ) { }
  booknew= new ProductModel('','','','');


  ngOnInit(): void {

  }

  Addproduct(){
    this.productService.newProduct(this.booknew);
    console.log("called");
    alert("success");
    this.router.navigate(['/books']);
  }

  

}
