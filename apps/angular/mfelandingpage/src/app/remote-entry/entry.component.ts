import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../pages/landing.component';

@Component({
  imports: [CommonModule, LandingComponent],
  selector: 'app-mfelandingpage-entry',
  template: `<app-landing></app-landing>`,
  // template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
