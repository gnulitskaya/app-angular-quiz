import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // Angular core modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
})

export class AppCoreModule{}
