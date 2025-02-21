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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
export class LoginPage {}