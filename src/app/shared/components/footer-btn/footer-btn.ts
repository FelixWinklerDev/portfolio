import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface FooterBtnData {
  text: string;
  link: string;
  pic?: string;
  alt?: string;
  hoverText?: string;
}

@Component({
  selector: 'app-footer-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-btn.html',
  styleUrl: './footer-btn.scss',
})
export class FooterBtn {
  @Input() data: FooterBtnData = {
    text: 'Link',
    link: '#',
    pic: 'assets/icons/default.png',
  };
}
