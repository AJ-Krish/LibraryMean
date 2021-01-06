import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
  
    ProductListComponent,
    NewproductComponent,
    UpdateComponent,
    LoginComponent,
    AuthorslistComponent,
    NewauthorComponent,
    UpdateauthorComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
