import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedLowModule } from '../../shared/app-shared.module';
import { QuizComponent } from './quiz/quiz.component';
import { AppCoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonDirective } from '../../shared/directives/skeleton.directive';
import { ItemsStore, ItemsQuery } from './quiz/store/quiz.store';
import { QuizService } from './quiz/store/quiz.service';

const routes: Routes = [
  { path: '', component: PublicComponent },
];

@NgModule({
  imports: [
    CommonModule,
    AppSharedLowModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),],
  exports: [],
  declarations: [PublicComponent, QuizComponent, SkeletonDirective],
  providers: [ItemsStore, ItemsQuery, QuizService],
})

export class PublicModule {}
