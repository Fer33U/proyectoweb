import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports:  [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  user= {
    email: '',
    password: ''
  }

  constructor(
    private AuthService: AuthService,
    private router: Router
    ){}

  ngOnInit(){

  }

  signUp(){
    this.AuthService.signup(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token' , res.token);
        this.router.navigate(['/private']);
      },
      err => console.log(err)

    )
  }

}

