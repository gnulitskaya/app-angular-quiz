import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppSharedLowModule } from './modules/shared/app-shared.module';
import { AppCoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { RootModule } from './modules/pages/root/root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AppCoreModule,
    AppSharedLowModule,
    RootModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
