import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { AboutMe } from './layout/about-me/about-me';
import { Skillset } from './layout/skillset/skillset';
import { Projects } from './layout/projects/projects';
import { Testimonials } from './layout/testimonials/testimonials';
import { ContactMe } from './layout/contact-me/contact-me';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    AboutMe,
    Skillset,
    Projects,
    Testimonials,
    ContactMe,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('portfolio');
  protected isLegalRoute = false;

  constructor(private router: Router) {
    this.isLegalRoute = this.router.url === '/legal';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLegalRoute = event.urlAfterRedirects === '/legal';
      }
    });
  }
}
