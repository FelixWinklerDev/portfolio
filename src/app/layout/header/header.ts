import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNav } from '../../pages/mobile-nav/mobile-nav';
import { BlueBtnComponent } from '../../shared/components/blue-btn/blue-btn';

@Component({
  selector: 'app-header',
  imports: [BlueBtnComponent, CommonModule, MobileNav],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  @ViewChild('mobileNav') mobileNav?: ElementRef<HTMLDialogElement>;

  constructor(private cd: ChangeDetectorRef) {}

  openMobileMenu(event: MouseEvent) {
    event.preventDefault();
    this.cd.detectChanges();
    this.mobileNav?.nativeElement.showModal();
  }

  closeMobileMenu() {
    this.mobileNav?.nativeElement.close();
  }
}
