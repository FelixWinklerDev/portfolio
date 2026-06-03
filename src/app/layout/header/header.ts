import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNav } from '../../pages/mobile-nav/mobile-nav';
import { BlueBtnComponent } from '../../shared/components/blue-btn/blue-btn';

interface InteractiveLetter {
  char: string;
  hovered: boolean;
}

@Component({
  selector: 'app-header',
  imports: [BlueBtnComponent, CommonModule, MobileNav],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})

export class Header {
  @ViewChild('mobileNav') mobileNav?: ElementRef<HTMLDialogElement>;

  headerTitle1: InteractiveLetter[] = 'Frontend'.split('').map((char) => ({ char, hovered: false }));
  headerTitle2: InteractiveLetter[] = 'DEVELOPER'.split('').map((char) => ({ char, hovered: false }));

  constructor(private cd: ChangeDetectorRef) {}

  openMobileMenu(event: MouseEvent) {
    event.preventDefault();
    this.cd.detectChanges();
    this.mobileNav?.nativeElement.showModal();
  }

  closeMobileMenu() {
    this.mobileNav?.nativeElement.close();
  }

  setLetterHover(letter: InteractiveLetter, hovered: boolean) {
    letter.hovered = hovered;
  }

  getLetterDisplay(letter: InteractiveLetter) {
    return letter.hovered ? this.toggleCase(letter.char) : letter.char;
  }

  private toggleCase(value: string) {
    return value === value.toLowerCase() ? value.toUpperCase() : value.toLowerCase();
  }
}
