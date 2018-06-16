import { Component, OnInit } from '@angular/core';
import { ISSUES } from './issues';
import { Issue } from './issue/issue.model';
import { TaskBoardService } from './shared/task-board.service';
import { Label } from './label/label.model';

@Component({
  selector: 'roadmap-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  issues: Issue[];
  labels: Label[];
  dates: Date[];
  dateHeight: number;
  labelWidth: number;
  colWidth: number;
  rowHeight: number;

  constructor(private taskboardService: TaskBoardService) { }

  ngOnInit() {
    this.issues = ISSUES.issues.map(
      (issue) => this.taskboardService.makeIssue(issue)
    ).sort((a,b) => a.duedate.getTime() - b.duedate.getTime());

    this.dates = this.taskboardService.makeDateLabels(this.issues);
    this.labels = this.taskboardService.makeLabels(this.issues);

    this.rowHeight = this.taskboardService.rowHeight;
    this.colWidth = this.taskboardService.colWidth;
    this.dateHeight = this.taskboardService.xAxisLabelHeight;
    this.labelWidth = this.taskboardService.yAxisLabelWidth;
  }
  
  /**
   * Applies styling to the task board
   */
  public taskboardStyle(): Object {
    const padding = 1;
    const width = this.labelWidth + (this.colWidth * this.dates.length) + (padding * 2);
    return {
      'width': `calc(${width}em + 2px)`,
      'padding': padding + 'em'
    };
  }

  /**
   * Style for the spacer in the top corner of the table
   * which prevents the x and y labels from overlapping
   */
  public spacerStyle(): Object {
    return {
      'margin-top': this.dateHeight + 'em'
    };
  }

  /**
   * Style for the issues container
   */
  public containerStyle(): Object {
    return {
      'max-width': `calc(100% - ${this.labelWidth}em)`
    };
  }
}
