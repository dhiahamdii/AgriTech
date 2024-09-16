import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Update to your NestJS backend URL

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }


  getProfile(): Observable<any> {
    const token = localStorage.getItem('authToken'); // Retrieve the token
    console.log("Token: ", token); // Debugging line to ensure the token is being retrieved
    return this.http.post(
      `${this.apiUrl}/profile`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }



}
