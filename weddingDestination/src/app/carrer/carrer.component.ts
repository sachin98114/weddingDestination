import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent {
  regForm: any;
  formData = {
    name: '',
    email: '',
    phone:'',
    message: '',
    file:'',
  };
  constructor(private emailService: EmailService) { }

  onSubmit() {
    this.emailService.sendEmail(this.formData).subscribe(
      () => {
        // Reset form data
        this.formData = {
          name: '',
          email: '',
          phone:'',
          message: '',
          file:''
        };
        alert('Email sent successfully!');
      },
      () => {
        alert('Error sending email. Please try again.');
      }
    );
    }
  }
