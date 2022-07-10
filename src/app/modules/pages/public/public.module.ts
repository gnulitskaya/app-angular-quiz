import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedLowModule } from '../../shared/app-shared.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), AppSharedLowModule],
  exports: [],
  declarations: [PublicComponent],
  providers: [],
})

export class PublicModule {}
