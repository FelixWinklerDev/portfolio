import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss'],
})
export class AboutMe {
  constructor(public translationService: TranslationService) {}
}
