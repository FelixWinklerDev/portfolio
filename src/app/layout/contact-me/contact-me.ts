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

  touchedFields: { [key: string]: boolean } = {
    fname: false,
    email: false,
    message: false,
    policy: false
  };

  markTouched(field: string): void {
    this.touchedFields[field] = true;
  }

  showValidationError(field: string): boolean {
    if (!this.touchedFields[field]) {
      return false;
    }
    return this.isFieldEmpty(field) || this.isFieldInvalid(field);
  }

  showPolicyError(): boolean {
    return this.touchedFields['policy'] && !this.policyCheck;
  }

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

    const payload = {
      name: this.fname,
      email: this.email,
      message: this.message,
    };
    fetch('./contact-from-mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Server returned ' + response.status);
        }
        return response.json();
      })
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
