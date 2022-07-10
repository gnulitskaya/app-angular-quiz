import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedLowModule } from '../../shared/app-shared.module';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      { path: '', redirectTo: 'private', pathMatch: 'full' },
      { path: 'public', loadChildren: () => import('../public/public.module').then(m => m.PublicModule) },
      { path: 'private', loadChildren: () => import('../private/private.module').then(m => m.PrivateModule),  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AppSharedLowModule],
  exports: [RootComponent],
  declarations: [RootComponent],
  providers: [],
})

export class RootModule {}
