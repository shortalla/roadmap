import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue/issue.model';
import { Label } from '../label/label.model';

@Component({
  selector: 'roadmap-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() rowHeight: number;
  @Input() colWidth: number;
  @Input() dateHeight: number;
  @Input() issues: Issue[];
  @Input() labels: Label[];
  @Input() dates: Date[];
  height: number;
  width: number;

  constructor() { }

  ngOnInit() {
    this.height = this.rowHeight * this.issues.length;
    this.width = this.colWidth * this.dates.length;
  }

  /**
   * Applies styling to the container
   */
  public containerStyle(): Object {
    return {
      height: this.height+'rem',
      width: this.width+'rem'
    }
  }
  
  /**
   * The distance of the issue from the top of the container
   * 
   * @param issue The issue model
   */
  public top(issue: Issue): number {
    for (let issueLabel of issue.labels) {
        for (let label of this.labels) {
          if (label.name === issueLabel)
            return this.rowHeight * this.labels.indexOf(label) +
              (label.issues.indexOf(issue)  * this.rowHeight);
        }
    }
    return this.rowHeight * (this.labels.length - 1) + (this.issues.indexOf(issue));
  }
  
  /**
   * The distance of the issue from the left of the container
   * 
   * @param issue The issue model
   */
  public left(issue: Issue): number {
    const ms = issue.duedate.getTime() - this.dates[0].getTime();
    const days = Math.round(((ms / 1000) / 60) / (60 * 24) / 7 * 5);
    return days - this.issueWidth(issue);
  }

  /**
   * The width of the issue card in the task board
   * 
   * @param issue The issue model
   */
  public issueWidth(issue: Issue): number {
    return this.colWidth * issue.estimationdays;
  }
}
