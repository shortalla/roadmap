import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue/issue.model';

@Component({
  selector: 'roadmap-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  @Input() top: number;
  @Input() left: number;
  @Input() height: number;
  @Input() width: number;

  constructor() { }

  ngOnInit() {}

  /**
   * Applies styling to the issue
   */
  issueStyle(): Object {
    return {
      'position': 'absolute',
      'top': this.top + 'em',
      'left': this.left + 'em',
      'height': this.height + 'em',
      'width': this.width + 'em',
    }
  }
}
