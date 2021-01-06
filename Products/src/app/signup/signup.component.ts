import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


user={
  username:'',
  password:''
}
  
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  userverify(){
    alert("Success...redirecting to books")
    this.router.navigate(['/books'])

  }

}
