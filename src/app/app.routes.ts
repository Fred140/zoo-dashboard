import { Routes } from '@angular/router';
import { DashzooComponent } from './dashzoo/dashzoo.component';
import { GestionsiteComponent } from './gestionsite/gestionsite.component';
import { GestionutilComponent } from './gestionutil/gestionutil.component';
import { RapportvComponent } from './rapportv/rapportv.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashzooComponent },
  { path: 'gestionsite', component: GestionsiteComponent },
  { path: 'gestionutilisateur', component: GestionutilComponent },
  { path: 'rapport', component: RapportvComponent },
];
