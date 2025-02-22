import { Component } from '@angular/core';
import { 
  IonContent, 
  IonAvatar, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonAvatar, 
    IonList, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonButton
  ]
})
export class PerfilPage {}