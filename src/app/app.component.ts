import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import storeJson from './store.json';

export interface Option {
  id: number;
  name: string;
  price: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  @Input() checked: boolean = true;

  quizList = storeJson;

  index: number = 0;
  slideIndex$$: BehaviorSubject<number> = new BehaviorSubject<number>(this.index);

  constructor(){}

  toggleDarkTheme(): void {
    document.body.classList.toggle('darkMode');
  }

  nextClick(): void {
    if (this.index < storeJson.length - 1) {
      this.slideIndex$$.next(++this.index);
      console.log(this.slideIndex$$.getValue())
    }
  }

  prevClick(): void {
    if(this.index > 0) {
      this.slideIndex$$.next(--this.index);
      console.log(this.slideIndex$$.getValue())
    }
  }
}
