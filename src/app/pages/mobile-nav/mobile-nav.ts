import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  imports: [],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNav {
  @Output() close = new EventEmitter<void>();
}
