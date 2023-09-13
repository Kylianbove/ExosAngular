import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ExosAngular';
  currentDateTime: string = '';

  ngOnInit() {
    this.updateCurrentDateTime();
    // Mettre à jour la date et l'heure actuelles toutes les secondes
    setInterval(() => this.updateCurrentDateTime(), 1000);
  }

  updateCurrentDateTime() {
    // Mettre à jour la date et l'heure actuelles
    this.currentDateTime = new Date().toLocaleString();
  }
}
