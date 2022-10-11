import { Injectable } from '@angular/core';
import { ItemsStore } from './quiz.store';
@Injectable()
export class QuizService {
  constructor(private quizStore: ItemsStore) {
  }

  // updateList(data: List, item: Item, purchased: boolean) {
  //   this.listStore.update(data.id, list => {
  //     return {
  //       ...list,
  //       items: update(data.items, item,  {purchased})
  //     }
  //  });
  // }

}
