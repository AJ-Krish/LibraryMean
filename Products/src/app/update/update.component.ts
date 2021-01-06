import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  bookItem= {
    bookname:'',
    author:'',
    genre:'',
    imageurl:''}
 
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editbookId");
    // console.log(productId)
    this.productService.getbook(productId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
      
  })
  }
  editProduct()
  {    
    this.productService.editbook(this.bookItem);   
    alert("Success");
    this.router.navigate(['/books']);
  }

}