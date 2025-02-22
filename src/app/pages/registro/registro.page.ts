import { Component } from '@angular/core';
import { 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonList, 
    IonItem, 
    IonIcon, 
    IonInput, 
    IonButton
  ]
})
export class RegistroPage {}

