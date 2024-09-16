import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(

    private router: Router
  ) { }
  navigatetologin(){
    this.router.navigate(["login"])
  }




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
    this.router.navigate(['about']);
  }



}
