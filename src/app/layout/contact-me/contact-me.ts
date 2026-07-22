import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.scss'],
})
export class ContactMe {
  @ViewChild('successDialog') successDialog?: ElementRef<HTMLDialogElement>;

  private readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  fname: string = '';
  email: string = '';
  message: string = '';
  policyCheck: boolean = false;

  constructor(
    private cd: ChangeDetectorRef,
    public translationService: TranslationService,
  ) {}

  closeSuccessDialog() {
    this.successDialog?.nativeElement.close();
  }

  isEmailValid(email: string): boolean {
    return this.emailPattern.test(email.trim());
  }

  isFieldInvalid(field: string): boolean {
    if (field === 'fname') {
      return this.fname.length < 3 && this.fname.length > 0;
    }
    if (field === 'email') {
      return this.email.length > 0 && !this.isEmailValid(this.email);
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
      this.isEmailValid(this.email) &&
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
