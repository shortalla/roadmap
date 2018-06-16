import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './api/api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    ApiService
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
