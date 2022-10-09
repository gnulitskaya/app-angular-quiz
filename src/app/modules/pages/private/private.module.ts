import { PrivateComponent } from './private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedLowModule } from '../../shared/app-shared.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [PrivateComponent],
  providers: [],
})

export class PrivateModule {}
