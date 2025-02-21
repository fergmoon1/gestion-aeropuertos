import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-aeropuertos',
  templateUrl: './aeropuertos.page.html',
  styleUrls: ['./aeropuertos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AeropuertosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
