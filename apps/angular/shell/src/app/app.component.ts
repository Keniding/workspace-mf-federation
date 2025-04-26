import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent as FooterComponent } from '@workspace-mf-federation/mfefooter';
import { RemoteEntryComponent as HeaderComponent } from '@workspace-mf-federation/mfeheader';
import { RemoteEntryComponent as NavbarComponent } from '@workspace-mf-federation/mfenavbar';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
