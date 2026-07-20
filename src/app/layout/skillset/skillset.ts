import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-skillset',
  imports: [],
  templateUrl: './skillset.html',
  styleUrl: './skillset.scss',
})
export class Skillset {
  constructor(public translationService: TranslationService) {}
}
