import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skillset',
  imports: [CommonModule],
  templateUrl: './skillset.html',
  styleUrl: './skillset.scss',
})
export class Skillset {
  isPeeled = false;

  constructor(public translationService: TranslationService) {}

  togglePeel() {
    this.isPeeled = !this.isPeeled;
  }
}
