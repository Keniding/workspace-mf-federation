import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  @Input() logoUrl = 'https://img.icons8.com/fluency/48/veterinarian.png';
  @Input() companyName = 'MicroFrontend App';
  @Input() footerLinks: {label: string, url: string}[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Servicios', url: '/servicios' },
    { label: 'Nosotros', url: '/nosotros' },
    { label: 'Blog', url: '/blog' },
    { label: 'Contacto', url: '/contacto' },
    { label: 'Preguntas Frecuentes', url: '/faq' }
  ];
  @Input() socialLinks: {icon: string, url: string}[] = [
    { icon: 'facebook', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'youtube', url: '#' },
    { icon: 'tiktok', url: '#' }
  ];

  currentYear: number = new Date().getFullYear();
}
