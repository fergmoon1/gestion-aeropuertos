import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { 
  IonContent, 
  IonList, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.page.html',
  styleUrls: ['./vuelos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Añade CommonModule aquí
    IonContent, 
    IonList, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent
  ]
})
export class VuelosPage {
  vuelos = [
    {
      origen: 'Bogotá',
      destino: 'Medellín',
      aerolinea: 'Avianca',
      hora: '10:00 AM',
      estado: 'En tiempo'
    },
    {
      origen: 'Cali',
      destino: 'Cartagena',
      aerolinea: 'LATAM',
      hora: '12:30 PM',
      estado: 'Retrasado'
    },
    {
      origen: 'Medellín',
      destino: 'Bogotá',
      aerolinea: 'Viva Air',
      hora: '03:45 PM',
      estado: 'Cancelado'
    }
  ];

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'En tiempo':
        return 'estado-ok';
      case 'Retrasado':
        return 'estado-warning';
      case 'Cancelado':
        return 'estado-danger';
      default:
        return '';
    }
  }
}