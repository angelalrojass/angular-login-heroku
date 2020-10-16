import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

//
  private URL='https://restapi-nodejs-jwt-mongo.herokuapp.com/api'


  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signin(form){
    return this.http.post<any>(this.URL + '/auth/signin', form)
   }
   loggedIn(){


    //33 esto es como hace un if(localStorage.getItem('token') return true) {}
        return !! localStorage.getItem('token');
       }
    
       //47
       getToken(){
         return localStorage.getItem('token');
    
       }
       //55
       logout(){
         localStorage.removeItem('token')
         //58
         this.router.navigate(['/signin'])
    
       }
}
