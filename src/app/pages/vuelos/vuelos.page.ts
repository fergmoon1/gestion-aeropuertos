import { Component } from '@angular/core';
import { 
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonList, 
  IonIcon 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.page.html',
  styleUrls: ['./vuelos.page.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonList, 
    IonIcon
  ]
})
export class VuelosPage {}
