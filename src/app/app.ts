import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { AboutMe } from './layout/about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboutMe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('portfolio');
}
