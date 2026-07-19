import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink, CommonModule, MobileNav],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  @ViewChild('mobileNav') mobileNav?: ElementRef<HTMLDialogElement>;

  constructor(private cd: ChangeDetectorRef, private router: Router) {}

  openMobileMenu(event: MouseEvent) {
    event.preventDefault();
    this.cd.detectChanges();
    this.mobileNav?.nativeElement.showModal();
  }

  closeMobileMenu() {
    this.mobileNav?.nativeElement.close();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
