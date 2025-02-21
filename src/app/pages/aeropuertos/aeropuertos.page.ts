import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonList, 
  IonItem, 
  IonThumbnail, 
  IonLabel, 
  IonBadge, 
  IonFooter, 
  IonTabs, 
  IonTabBar, 
  IonTabButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-aeropuertos',
  templateUrl: './aeropuertos.page.html',
  styleUrls: ['./aeropuertos.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonContent, 
    IonList, 
    IonItem, 
    IonThumbnail, 
    IonLabel, 
    IonBadge, 
    IonFooter, 
    IonTabs, 
    IonTabBar, 
    IonTabButton
  ]
})
export class AeropuertosPage {
  // Aquí puedes agregar lógica adicional si es necesario
}