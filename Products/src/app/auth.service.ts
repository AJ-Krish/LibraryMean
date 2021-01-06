import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginadmin(user){
    return this.http.post("http://localhost:5001/admin",user)
    .subscribe((data)=>{
      console.log('success')
      this.router.navigate(['/books']);


    });
  }

  constructor(private http:HttpClient,private router:Router) {  }
}
