import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  authorItem= {
    authorname:'',
    genre:'',
    work:'',
    imageurl:''}


  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editauthorId");
    // console.log(productId)
    this.authorService.getauthor(productId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
      
  })

  }
  editauthor()
  {    
    this.authorService.editauthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
