import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, mapTo, delay, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import storeJson from '../../../../store.json';

export interface Option {
  id: number;
  name: string;
  price: number
}

@UntilDestroy()

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  @Input() checked: boolean = true;

  quizList = storeJson;

  index: number = 0;
  slideIndex$$: BehaviorSubject<number> = new BehaviorSubject<number>(this.index);
  resultsPrice$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  disableButton$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showQuiz$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showFirstScreen$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showThankScreen$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public quiz: FormGroup = new FormGroup({
    type: new FormControl(''),
    style: new FormControl(''),
    budget: new FormControl(''),
    time: new FormControl(''),
    share: new FormControl(''),
  });

  public quizData: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userPhone: new FormControl(''),
    userEmail: new FormControl(''),
  });

  constructor(){}

  isLoading = false;

  load() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.quiz.valueChanges.pipe(
      map(x => Number(x.type) + Number(x.style) + Number(x.budget) + Number(x.time) + Number(x.share)),
      map(x => this.resultsPrice$$.next(x)),
      tap(() => this.disableButton$$.next(false)),
      switchMap(() => this.selectItem()),
      untilDestroyed(this)
    ).subscribe();

    this.slideIndex$$.pipe(
      map(x => x > 4 ? this.showQuiz$$.next(false) : null)
    ).subscribe();
  }


  nextClick(): void {
    if (this.index < storeJson.length) {
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
      take(1),
      delay(1000),
      map(() => {
        if (this.index < storeJson.length) {
          this.slideIndex$$.next(++this.index);
          this.disableButton$$.next(true);
          console.log(this.slideIndex$$.getValue())
        }
      }),
      mapTo(void 0)
    )
  }

  startClick(): void {
    this.showQuiz$$.next(true);
    this.showFirstScreen$$.next(false);
  }

  sendClick(): void {
    this.showThankScreen$$.next(true);
  }


}
