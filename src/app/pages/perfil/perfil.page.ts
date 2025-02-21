import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.css']
})
export class PerfilPage {}

