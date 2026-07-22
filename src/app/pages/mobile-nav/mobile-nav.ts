import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNav {
  
  constructor(
    public translationService: TranslationService,
  ) {}

  @Output() close = new EventEmitter<void>();

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
