import { Component } from '@angular/core';
import { 
  IonContent, 
  IonItem, 
  IonIcon, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonItem, 
    IonIcon, 
    IonInput, 
    IonButton
  ]
})
export class LoginPage {}