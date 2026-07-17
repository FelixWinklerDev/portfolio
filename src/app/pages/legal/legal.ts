import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
