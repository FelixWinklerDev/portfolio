import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  constructor(public translationService: TranslationService) {}

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
