import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';

interface ButtonContent {
  text: string;
  hoverText: string;
  pic: string;
}

@Component({
  selector: 'app-blue-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-btn.html',
  styleUrls: ['./blue-btn.scss'],
})
export class BlueBtnComponent {
  public translationService = inject(TranslationService);

  get data(): ButtonContent {
    return {
      text: this.translationService.translate('header.hello'),
      hoverText: this.translationService.translate('header.introduce'),
      pic: 'assets/icons/waving_hand.png',
    };
  }
}
