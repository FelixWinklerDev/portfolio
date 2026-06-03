import { Component } from '@angular/core';

interface ButtonContent {
  text: string;
  hoverText: string;
  pic: string;
}

@Component({
  selector: 'app-blue-btn',
  templateUrl: './blue-btn.html',
  styleUrls: ['./blue-btn.scss'],
})
export class BlueBtnComponent {
  data: ButtonContent = {
    text: 'Hello World',
    hoverText: "I'M FELIX WINKLER",
    pic: '/assets/icons/waving_hand.png',
  };
}
