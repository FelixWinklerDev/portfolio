import { Routes } from '@angular/router';
import { Legal } from './pages/legal/legal';

export const routes: Routes = [
//  { path: '', component:  },
  { path: 'legal', component: Legal },
  { path: '**', redirectTo: '' },
];
