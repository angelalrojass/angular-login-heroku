import { Component, OnInit } from '@angular/core';


import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  message: string;
  

  constructor(private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router
      ) {
    this.form=this.formBuilder.group({
      email: ['',[Validators.required]],
      password:['',[Validators.required]]
     
    })


   }

  ngOnInit() {
  }
  signin(){

    this.authService.signin(this.form.value)
    .subscribe(
      res=>{

        
        localStorage.setItem('token', res.token);
        this.router.navigate(['/tasks'])
        console.log(res);

        
      },
      err => {
        this.message = err.error.message
        console.log(err)
      }
    )




  }

}
