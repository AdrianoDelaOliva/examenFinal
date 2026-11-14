import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Contactos } from './pages/contactos/contactos';
export const routes: Routes = [
    { path: '', component: Principal },
    { path: 'contactos', component: Contactos },
    { path: '*', redirectTo:'/'}
];
