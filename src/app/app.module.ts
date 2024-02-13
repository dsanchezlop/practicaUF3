import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EmailDirective } from './Directives/email.directive';
import { PhoneDirective } from './Directives/phone.directive';
import { PasswordDirective } from './Directives/password.directive';
import { UsernameDirective } from './Directives/username.directive';
import { DollarToEuroPipe } from './Pipes/dollar-to-euro.pipe';;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    LogoutComponent,
    ProductListComponent,
    EmailDirective,
    PhoneDirective,
    PasswordDirective,
    UsernameDirective,
    DollarToEuroPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
