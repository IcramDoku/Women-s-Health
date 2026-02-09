import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Automatically attach the authentication token 
//(e.g., a JWT) to all outgoing HTTP requests


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthInterceptorModule { }
