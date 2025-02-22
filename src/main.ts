import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
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

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));