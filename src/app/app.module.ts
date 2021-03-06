import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { TaskBoardModule } from './task-board/task-board.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    TaskBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
