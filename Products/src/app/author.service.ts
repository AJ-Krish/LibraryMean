import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }


  getauthor(id) {
    // console.log(id)
    return this.http.get("http://localhost:5001/author/"+id);
    
  }


  getauthors(){
    return this.http.get("http://localhost:5001/authors");
  }
  newauthor(item) {
    return this.http.post("http://localhost:5001/addauthor",{"author":item})
    .subscribe(data=>{console.log})

    
  }

  editauthor(author)
  {
    console.log('client update')
    console.log(author)
    return this.http.put("http://localhost:5001/authorupdate",author)
    .subscribe(data =>{console.log(data)})
  }


  deleteauthor(id:any)
  {

    return this.http.delete("http://localhost:5001/removeauthor/"+id)

  }


}
