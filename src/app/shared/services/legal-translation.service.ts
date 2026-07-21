import { Injectable } from '@angular/core';
import { TranslationService } from './translation.service';

@Injectable({ providedIn: 'root' })
export class LegalTranslationService {
  private currentLanguage: 'en' | 'de' = 'en';

  private translations = {
    en: {
      header: {
        nav: {
          aboutMe: 'About Me',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact',
        },
        title: 'Legal Notice',
      },
    },
    de: {
      header: {
        nav: {
          aboutMe: 'Über mich',
          skills: 'Skills',
          projects: 'Projekte',
          contact: 'Kontakt',
        },
        title: 'Rechtlicher Hinweis',
      },
    },
  };

  constructor(private mainTranslationService: TranslationService) {}

  translate(key: string): string {
    const currentLanguage = this.mainTranslationService.getLanguage();

    const keys = key.split('.');
    let value: any = this.translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }
}
