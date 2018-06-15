import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './task-board.component';
import { ContainerComponent } from './container/container.component';
import { DeadlineComponent } from './deadline/deadline.component';
import { LabelComponent } from './label/label.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskBoardComponent, ContainerComponent, DeadlineComponent, LabelComponent, StoryComponent],
  exports: [TaskBoardComponent]
})
export class TaskBoardModule { }
