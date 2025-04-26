import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'profile',
    loadChildren: () => import('mfeprofile/Routes')
      .then(m => m.remoteRoutes)
  },
  {
    path: 'info',
    loadChildren: () => import('mfeinfo/Routes')
      .then(m => m.remoteRoutes)
  }
];
