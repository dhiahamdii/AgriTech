import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  username: string | null = '';
  constructor(private authService: AuthService, private router: Router) {}















  logout() {
    // Your logout logic here
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
