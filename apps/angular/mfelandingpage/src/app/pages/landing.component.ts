import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
    this.setupCountAnimations();
  }

  setupScrollAnimations(): void {
    const animatedElements = document.querySelectorAll('app-landing .animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  setupCountAnimations(): void {
    const countElements = document.querySelectorAll('app-landing .animate-count');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const targetValue = element.innerText;

          if (targetValue.includes('+') || targetValue.includes('/')) {
            element.style.opacity = '0';
            setTimeout(() => {
              element.style.transition = 'opacity 1s ease-out';
              element.style.opacity = '1';
            }, 100);
          } else {
            const numericValue = parseInt(targetValue);
            if (!isNaN(numericValue)) {
              this.animateCount(element, 0, numericValue);
            }
          }

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    countElements.forEach(element => {
      observer.observe(element);
    });
  }

  animateCount(element: HTMLElement, start: number, end: number): void {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(start + (end - start) * progress);

      element.innerText = currentCount.toString();

      if (frame === totalFrames) {
        clearInterval(counter);
        element.innerText = end.toString();
      }
    }, frameDuration);
  }
}
