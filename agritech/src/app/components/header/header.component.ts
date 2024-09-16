import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }


  logout() {
    localStorage.removeItem('token');
    // For example, navigate to the login page
    this.router.navigate(['home']);
  }

  godashboard() {
    // Your logout logic here
    // For example, navigate to the login page
    this.router.navigate(['dashboard']);
  }
  profile() {
    // Your logout logic here
    // For example, navigate to the login page
    this.router.navigate(['admin']);
  }
  about() {
    // Your logout logic here
    // For example, navigate to the login page
    this.router.navigate(['header']);
  }
}
