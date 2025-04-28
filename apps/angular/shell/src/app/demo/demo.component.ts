import { Component } from '@angular/core';
import { RemoteEntryComponent as FooterComponent } from '@workspace-mf-federation/mfefooter';
import { RemoteEntryComponent as HeaderComponent } from '@workspace-mf-federation/mfeheader';
import { RemoteEntryComponent as NavbarComponent } from '@workspace-mf-federation/mfenavbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {}
