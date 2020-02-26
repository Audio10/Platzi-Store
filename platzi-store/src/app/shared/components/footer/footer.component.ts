import { Component, OnInit } from '@angular/core';
// Se pueden validar los formularios con Validators
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailField: FormControl;

  constructor() {
    // Un formControl cuenta con un constructos que recibe (VALORINICIAL, [VALIDADORES])
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ]);
    // cada vez que cambie (Escuchar un cambio dinamicamente)
    // this.emailField.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit() {}

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
