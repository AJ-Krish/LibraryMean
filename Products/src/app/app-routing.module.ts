import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { LoginComponent } from './login/login.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'authors',component:AuthorslistComponent},
  {path:'books',component:ProductListComponent},
  {path:'add',component:NewproductComponent},
  {path:'addauthor',component:NewauthorComponent},
  {path:'update',component:UpdateComponent},
  {path:'signup',component:SignupComponent},
  {path:'authorupdate',component:UpdateauthorComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
