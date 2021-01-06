import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { authorModel } from './author.model';

@Component({
  selector: 'app-authorslist',
  templateUrl: './authorslist.component.html',
  styleUrls: ['./authorslist.component.css']
})
export class AuthorslistComponent implements OnInit {
  title:String = "Authors";
  authors: authorModel[];

  constructor( private authorService:AuthorService, private router:Router ) { }

  ngOnInit(): void {
    this.authorService.getauthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

  editauthor(author:any)
    {
      localStorage.setItem("editauthorId", author._id.toString());
      // console.log(book._id);
      this.router.navigate(['authorupdate']);
  
    }

    deleteauthor(author)
    {
      this.authorService.deleteauthor(author._id)
        .subscribe((data) => {
          this.authors = this.authors.filter(p => p !== author);
        })
    


}

}
