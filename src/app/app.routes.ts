import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then(m => m.RegistroPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'aeropuertos',
    loadComponent: () => import('./pages/aeropuertos/aeropuertos.page').then(m => m.AeropuertosPage)
  },
  {
    path: 'escalas',
    loadComponent: () => import('./pages/escalas/escalas.page').then(m => m.EscalasPage)
  },
  {
    path: 'vuelos',
    loadComponent: () => import('./pages/vuelos/vuelos.page').then(m => m.VuelosPage)
  }
];

