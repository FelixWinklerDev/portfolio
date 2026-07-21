import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { CommonModule } from '@angular/common';
import { LegalTranslationService } from '../../shared/services/legal-translation.service';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink, CommonModule, MobileNav],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  @ViewChild('mobileNav') mobileNav?: ElementRef<HTMLDialogElement>;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    public legalTranslationService: LegalTranslationService,
    public translationService: TranslationService,
  ) {}

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

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }

  setLanguage(lang: 'en' | 'de') {
    this.translationService.setLanguage(lang);
  }

  isActiveLanguage(language: 'en' | 'de'): boolean {
    return this.translationService.getLanguage() === language;
  }
}
