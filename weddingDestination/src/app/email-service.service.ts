import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://mail.google.com//send-email'; // Replace with your server-side API URL

  constructor(private http: HttpClient) { }

  sendEmail(formData: any) {
    console.log(formData)
    return this.http.post(this.apiUrl, formData);
  }
}
