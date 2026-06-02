import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Legal } from '../../pages/legal/legal';

@Component({
  selector: 'app-contact-me',
  imports: [Legal],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  @ViewChild('legalDialog') legalDialog?: ElementRef<HTMLDialogElement>;

  constructor(private cd: ChangeDetectorRef) {}

  openDialog(event: MouseEvent) {
    event.preventDefault();
    this.cd.detectChanges();
    this.legalDialog?.nativeElement.showModal();
  }

  closeDialog() {
    this.legalDialog?.nativeElement.close();
  }

  openPolicy(event: MouseEvent) {
    this.legalDialog?.nativeElement.showModal();
    setTimeout(() => {
      const element = document.getElementById('policy');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}
