import { Component } from '@angular/core';
import { BlueBtnConponent } from '../../shared/components/blue-btn/blue-btn';

@Component({
  selector: 'app-header',
  imports: [BlueBtnConponent],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {}
