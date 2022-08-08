import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, tap, mapTo, delay } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import storeJson from './store.json';

export interface Option {
  id: number;
  name: string;
  price: number
}

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @Input() checked: boolean = true;

  quizList = storeJson;

  index: number = 0;
  slideIndex$$: BehaviorSubject<number> = new BehaviorSubject<number>(this.index);
  resultsPrice$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public quiz: FormGroup = new FormGroup({
    type: new FormControl(''),
    style: new FormControl(''),
    budget: new FormControl(''),
    time: new FormControl(''),
    share: new FormControl(''),
  })

  constructor(){}

  ngOnInit(): void {
    this.quiz.valueChanges.pipe(
      map(x => Number(x.type) + Number(x.style) + Number(x.budget) + Number(x.time) + Number(x.share)),
      map(x => this.resultsPrice$$.next(x)),
      switchMap(() => this.selectItem()),
      untilDestroyed(this)
    ).subscribe();
  }

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

  selectItem(): Observable<void> {
    return of(void 0).pipe(
      delay(500),
      take(1),
      tap(() => {
        if (this.index < storeJson.length - 1) {
          this.slideIndex$$.next(++this.index);
          console.log(this.slideIndex$$.getValue())
        }
      }),
      mapTo(void 0)
    )
  }

}
