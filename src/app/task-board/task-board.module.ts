import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskBoardComponent } from './task-board.component';
import { ContainerComponent } from './container/container.component';
import { LabelComponent } from './label/label.component';
import { IssueComponent } from './issue/issue.component';
import { DateComponent } from './date/date.component';
import { TaskBoardService } from './shared/task-board.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    TaskBoardComponent, 
    ContainerComponent, 
    LabelComponent, 
    IssueComponent, 
    DateComponent
  ],
  providers: [TaskBoardService],
  exports: [TaskBoardComponent]
})
export class TaskBoardModule { }
