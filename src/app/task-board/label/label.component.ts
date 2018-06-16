import { Component, OnInit, Input } from '@angular/core';
import { Label } from './label.model';

@Component({
  selector: 'roadmap-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})

/**
 * Component for the label shown on the y axis of the taskboard.
 */
export class LabelComponent implements OnInit {
  @Input() private width: number;
  @Input() private height: number;
  @Input() private label: Label;

  constructor() { }

  ngOnInit() {}

  /**
   * Applies styling to the label based on the container
   */
  public labelStyle(): Object {
    return {
      height: this.height * this.label.count + 'em',
      width: this.width + 'em'
    };
  }
}
