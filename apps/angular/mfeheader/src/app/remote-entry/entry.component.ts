import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@workspace-mf-federation/ui-lib';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  selector: 'app-mfeheader-entry',
  template: `
    <lib-header
      [appName]="'Mi MFE'"
      [logoUrl]="logoUrl"
      [menuItems]="menuItems"
    ></lib-header>
  `,
})
export class RemoteEntryComponent {
  logoUrl = 'https://img.icons8.com/fluency/96/veterinarian.png';
  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Productos', route: '/productos' }
  ];
}
