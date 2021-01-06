import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { authorModel } from '../authorslist/author.model';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  title:String = "Add Author";
  constructor(private authorService:AuthorService ,private router: Router) { }

  authornew= new authorModel('','','','');

  ngOnInit(): void {
  }

  Addauthor(){
    this.authorService.newauthor(this.authornew);
    console.log("called");
    alert("success");
    this.router.navigate(['/authors']);
  }

}
