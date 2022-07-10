import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import storeJson from './store.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() checked: boolean = true;
  price: string = storeJson.price;

  constructor(private _formBuilder: FormBuilder){}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  toggleDarkTheme(): void {
    document.body.classList.toggle('darkMode');
  }
}
