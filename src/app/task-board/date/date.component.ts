import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'roadmap-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

/**
 * Component for the date shown on the x axis of the taskboard.
 */
export class DateComponent implements OnInit {
  @Input() private date: Date;
  @Input() private width: number;
  @Input() private height: number;

  constructor() { }

  ngOnInit() {}

  /**
   * Applies styling to the date based on the container
   */
  public dateStyle(): Object {
    // Only show days that fall on a Friday to prevent clutter
    const visibility = this.date.getDay() !== 5 ? 'hidden': '';
    return {
      'visibility': visibility,
      'min-width': this.width  +'em',
      'width': this.width + 'em',
      'height': this.height + 'em'
    }
  }
}
