import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone'; // Importa IonApp e IonRouterOutlet
import { addIcons } from 'ionicons'; // Importa addIcons
import { 
  personCircleOutline, 
  homeOutline, 
  personOutline, 
  settingsOutline,
  airplaneOutline,
  mailOutline,
  callOutline,
  locationOutline,
  lockClosedOutline,
  addCircleOutline,
  hourglassOutline
} from 'ionicons/icons'; // Importa los íconos

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet] // Añade IonApp e IonRouterOutlet aquí
})
export class AppComponent {
  constructor() {
    // Registra los íconos
    addIcons({
      'person-circle-outline': personCircleOutline,
      'home-outline': homeOutline,
      'person-outline': personOutline,
      'settings-outline': settingsOutline,
      'airplane-outline': airplaneOutline,
      'mail-outline': mailOutline,
      'call-outline': callOutline,
      'location-outline': locationOutline,
      'lock-closed-outline': lockClosedOutline,
      'add-circle-outline': addCircleOutline,
      'hourglass-outline': hourglassOutline
    });
  }
}