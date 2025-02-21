import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.css']
})
export class RegistroPage {}

