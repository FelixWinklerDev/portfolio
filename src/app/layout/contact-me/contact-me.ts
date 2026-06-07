import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Legal } from '../../pages/legal/legal';

@Component({
  selector: 'app-contact-me',
  imports: [Legal, FormsModule, CommonModule],
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.scss'],
})
export class ContactMe {
  @ViewChild('legalDialog') legalDialog?: ElementRef<HTMLDialogElement>;
  @ViewChild('successDialog') successDialog?: ElementRef<HTMLDialogElement>;

  fname: string = '';
  email: string = '';
  message: string = '';
  policyCheck: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  openDialog(event: MouseEvent) {
    event.preventDefault();
    this.cd.detectChanges();
    this.legalDialog?.nativeElement.showModal();
  }

  closeDialog() {
    this.legalDialog?.nativeElement.close();
  }

  closeSuccessDialog() {
    this.successDialog?.nativeElement.close();
  }

  openPolicy(event: MouseEvent) {
    this.legalDialog?.nativeElement.showModal();
    setTimeout(() => {
      const element = document.getElementById('policy');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  isFieldInvalid(field: string): boolean {
    if (field === 'fname') {
      return this.fname.length < 3 && this.fname.length > 0;
    }
    if (field === 'email') {
      return this.email.length < 8 && this.email.length > 0;
    }
    if (field === 'message') {
      return this.message.length < 10 && this.message.length > 0;
    }
    return false;
  }

  isFieldEmpty(field: string): boolean {
    if (field === 'fname') {
      return this.fname.length === 0;
    }
    if (field === 'email') {
      return this.email.length === 0;
    }
    if (field === 'message') {
      return this.message.length === 0;
    }
    return false;
  }

  showValidationError(field: string): boolean {
    return this.isFieldEmpty(field) || this.isFieldInvalid(field);
  }

  isFormValid(): boolean {
    return (
      this.fname.length >= 3 &&
      this.email.length >= 8 &&
      this.message.length >= 10 &&
      this.policyCheck === true
    );
  }

  submitForm(): void {
    if (!this.isFormValid()) {
      return;
    }

    const formData = new FormData();
    formData.append('fname', this.fname);
    formData.append('email', this.email);
    formData.append('message', this.message);

    fetch('./contact-from-mail.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        this.fname = '';
        this.email = '';
        this.message = '';
        this.policyCheck = false;
        this.cd.detectChanges();
        this.successDialog?.nativeElement.showModal();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
