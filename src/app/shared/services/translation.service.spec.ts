import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should switch between English and German translations', () => {
    expect(service.translate('header.nav.aboutMe')).toBe('About Me');

    service.setLanguage('de');

    expect(service.translate('header.nav.aboutMe')).toBe('Über mich');
  });
});
