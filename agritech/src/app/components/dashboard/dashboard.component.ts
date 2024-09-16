import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[NgClass]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  data: any;

  temperatureAlert: boolean = false;
  humidityAlert: boolean = false;
  temperatureThreshold: number = 25;
  humidityThreshold: number = 70;

  temperatureChart: Chart | null = null;
  humidityChart: Chart | null = null;
  lightIntensityChart: Chart | null = null;


  temperatureLabels: string[] = [];
  temperatureData: number[] = [];

  humidityLabels: string[] = [];
  humidityData: number[] = [];

  lightIntensityLabels: string[] = [];
  lightIntensityData: number[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.fetchData();

    setInterval(() => this.fetchData(), 5000); // Fetch data every 5 seconds
  }

  ngAfterViewInit() {
    this.initCharts();
  }

  fetchData() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      this.checkAlerts();
      this.updateCharts();
    });
  }




  checkAlerts() {
    if (this.data?.temperature >= this.temperatureThreshold) {
      this.temperatureAlert = true;
     // alert('Temperature is too high!');
    } else {
      this.temperatureAlert = false;
    }

    if (this.data?.humidity >= this.humidityThreshold) {
      this.humidityAlert = true;
     // alert('Humidity is too high!');
    } else {
      this.humidityAlert = false;
    }
  }

  initCharts() {
    const ctxTemp = document.getElementById('temperatureChart') as HTMLCanvasElement;
    const ctxHum = document.getElementById('humidityChart') as HTMLCanvasElement;
    const ctxLight = document.getElementById('lightIntensityChart') as HTMLCanvasElement;

    this.temperatureChart = new Chart(ctxTemp, {
      type: 'line',
      data: {
        labels: this.temperatureLabels,
        datasets: [{
          label: 'Temperature (°C)',
          data: this.temperatureData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }],
      },
    });

    this.humidityChart = new Chart(ctxHum, {
      type: 'line',
      data: {
        labels: this.humidityLabels,
        datasets: [{
          label: 'Humidity (%)',
          data: this.humidityData,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }],
      },
    });

    this.lightIntensityChart = new Chart(ctxLight, {
      type: 'line',
      data: {
        labels: this.lightIntensityLabels,
        datasets: [{
          label: 'Light Intensity (lux)',
          data: this.lightIntensityData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }],
      },
    });

  }

  updateCharts() {
    const timestamp = new Date().toLocaleTimeString();

    if (this.temperatureChart) {
      this.temperatureLabels.push(timestamp);
      this.temperatureData.push(this.data?.temperature);
      this.temperatureChart.update();
    }

    if (this.humidityChart) {
      this.humidityLabels.push(timestamp);
      this.humidityData.push(this.data?.humidity);
      this.humidityChart.update();
    }

    if (this.lightIntensityChart) {
      this.lightIntensityLabels.push(timestamp);
      this.lightIntensityData.push(this.data?.lightIntensity);
      this.lightIntensityChart.update();
    }


  }



  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }

  godashboard() {
    this.router.navigate(['dashboard']);
  }

  profile() {
    this.router.navigate(['admin']);
  }

  about() {
    this.router.navigate(['header']);
  }
}
