import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  loginData = { email: '', password: '' };
  registerData = { name: '', email: '', password: '' };
  showRegisterForm = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  userId : any;

  ngAfterViewInIt(): void {
    this.userId = localStorage.getItem('userId');
    console.log('this.userId ' , this.userId);
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
  onLogin() {
    this.apiService.loginUser(this.loginData.email, this.loginData.password).subscribe(
      response => {
        console.log('Login successful', response);
        this.userId = response?.id;
        if (this.userId) {
          localStorage.setItem('userId', this.userId);
          this.router.navigate(['/hotels']);
        } else {
          window.alert('User ID not found in response.');
        }
      },
      (error) => {
        console.error('Login failed', error);
        if (error.status === 401) {
          this.router.navigate(['/home']);
          window.alert('Username and password are not correct.');
        } else {
          window.alert('An unexpected error occurred.');
        }
      }
    );
  }

  onRegister() {
    this.apiService.createUser(this.registerData).subscribe(
      response => {
        console.log('Registration successful', response);
        this.showRegisterForm = false;
      },
      error => {
        console.error('Registration failed', error);
        window.alert('An unexpected error occurred while registration.');
      }
    );
  }
}
