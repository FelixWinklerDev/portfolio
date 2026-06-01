import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  @Output() close = new EventEmitter<void>();
}
