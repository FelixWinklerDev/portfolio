import { Component } from '@angular/core';

interface ButtonContent {
  text: string;
  pic: string;
}

@Component({
  selector: 'app-blue-btn',
  imports: [],
  templateUrl: './blue-btn.html',
  styleUrl: './blue-btn.scss',
})
export class BlueBtnConponent {
  data: ButtonContent = {
    text: "Hello World",
    pic: '/assets/icons/waving_hand.png',
  };
}
