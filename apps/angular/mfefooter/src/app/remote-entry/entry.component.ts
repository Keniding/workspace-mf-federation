import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@workspace-mf-federation/ui-lib';

@Component({
  imports: [CommonModule, FooterComponent],
  selector: 'app-mfefooter-entry',
  template: `
    <lib-footer
      [companyName]="'Mi Empresa'"
      [logoUrl]="logoUrl">
    </lib-footer>
  `,
})
export class RemoteEntryComponent {
  logoUrl = 'https://img.icons8.com/fluency/96/veterinarian.png';
  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Productos', route: '/productos' }
  ];
}
