import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Item, ItemsStore } from './quiz.store';

@Injectable()
export class QuizService {
  constructor(private http: HttpClient, private quizStore: ItemsStore) {}

  getAllCourses(): Observable<Item[]> {
    return this.http.get<Item[]>('assets/store.json').pipe(
      tap(() => {
        this.quizStore.setLoading(true);
      }),
      tap(courses => {
        this.quizStore.loadItems(courses, true);
      }),
      tap(() => {
        this.quizStore.setLoading(false);
      }),
    );
  }
}
