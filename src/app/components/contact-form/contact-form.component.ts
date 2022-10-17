import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/f/mwkznkwn',
          {
            Nome: email.name,
            Empresa: email.company,
            Email: email.email,
            Menssagem: email.messages,
            Telefone: email.phone,
          },
          { headers: headers }
        )
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
