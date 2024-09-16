import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, HttpClientModule], // Import HttpClientModule here
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null; // Property to hold error message

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.loginError = 'Please enter both username and password.';
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/admin']); // Redirect to profile or dashboard
        this.loginError = null; // Clear any previous error
      },
      (error) => {
        this.loginError = error.error.message || 'Login failed. Please check your credentials.';
        console.error('Login error', error);
      }
    );
  }

  navigatetoregister() {
    this.router.navigate(['register']);
  }
}
