import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj:Login;

  constructor(private http: HttpClient, private router: Router){
    this.loginObj = new Login();
  }

  onLogin(){
    this.http.post('https://dummyjson.com/auth/login', this.loginObj).subscribe((res:any)=>{
      if(res.email!=''){
        alert("Logged in!");
        this.router.navigateByUrl("/dashboard");
      }
      else{
        alert("Wrong cred!");
      }
    })
  }
}

export class Login {

  username:string;
  password:string;

  constructor() {

    this.username='';
    this.password='';
  }
}
