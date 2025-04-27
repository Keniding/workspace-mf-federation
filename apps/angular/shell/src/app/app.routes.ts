import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('mfelandingpage/Routes')
      .then(m => m.remoteRoutes),
  },
  {
    path: 'welcome',
    component: NxWelcomeComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
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
