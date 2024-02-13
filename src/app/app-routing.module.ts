import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import {RegisterComponent} from './Components/register/register.component';
import {LoginComponent} from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';
const routes: Routes = [
  {path: 'home',
    component: HomeComponent
  },
  {path: 'productList',
    component: ProductListComponent},
  {path:'register',
    component: RegisterComponent
  },
  {path:'login',
    component: LoginComponent
  },
  {path:'logout',
    component: LogoutComponent
  },
  {path: 'cart',
    component: CartComponent
  },
  {path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
