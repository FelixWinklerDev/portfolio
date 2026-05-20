import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { AboutMe } from './layout/about-me/about-me';
import { Skillset } from './layout/skillset/skillset';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboutMe, Skillset],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('portfolio');
}
