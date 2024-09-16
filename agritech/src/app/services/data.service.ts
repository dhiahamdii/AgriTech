import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/data'; // Ensure this URL points to your NestJS server

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  // Fetch historical data
  getHistoricalData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`);
  }


}
