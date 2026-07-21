import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  ChangeDetectorRef,
  Input,
  Output,
} from '@angular/core';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';

export interface Project {
  name: string;
  description: string;
  details: string;
  duration: number;
  technologies: string;
  img: string;
  sticker: string;
  github: string;
  livetest: string;
}

@Component({
  selector: 'app-project-details',
  imports: [MobileNav, CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  @Input() project: Project | null = null;

  @Output() close = new EventEmitter<void>();

  @Output() next = new EventEmitter<void>();

  @ViewChild('mobileNav') mobileNav?: ElementRef<HTMLDialogElement>;

  get projectKey(): string {
    if (!this.project) return '';

    switch (this.project.name) {
      case 'Join':
        return 'join';
      case 'El Pollo Loco':
        return 'elPollo';
      case 'Pokedex':
        return 'pokedex';
      default:
        return '';
    }
  }

  constructor(
    private cd: ChangeDetectorRef,
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

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }

  isActiveLanguage(language: 'en' | 'de') {
    return this.translationService.getLanguage() === language;
  }
}
