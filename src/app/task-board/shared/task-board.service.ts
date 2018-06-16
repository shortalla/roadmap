import { Injectable } from '@angular/core';
import { Issue } from '../issue/issue.model';
import { Label } from '../label/label.model';

@Injectable()
export class TaskBoardService {
  public readonly colWidth: number;
  public readonly rowHeight: number;
  public readonly yAxisLabelWidth: number;
  public readonly xAxisLabelHeight: number;

  constructor() {
    this.colWidth = 1;
    this.rowHeight = 6;
    this.xAxisLabelHeight = 2;
    this.yAxisLabelWidth = 6;
  }

  /**
   * The list of dates for the x axis of taskboard
   * 
   * @param issues The list of issues on the task board
   * 
   * Note: Only dates that fall between Monday and Friday are included
   */
  public makeDateLabels(issues: Issue[]): Date[] {
    const estimationStartDates = issues.map((issue) => {
      let date = new Date(issue.duedate);
      const workdaysToWeekdays = Math.round(issue.estimationdays / 5 * 7);
      date.setDate(date.getDate() - workdaysToWeekdays);
      return new Date(date);
    }).sort((a,b) => a.getTime() - b.getTime());
    
    const first = estimationStartDates[0];
    const last = issues[issues.length - 1].duedate;

    return this.getWorkDays(first, last);
  }

  /**
   * The list of label for the y axis of the taskboard
   * 
   * @param issues The list of issues on the task board
   */
  public makeLabels(issues: Issue[]): Label[] {
    const labelModels: Label[] = [];
    const labelList = [] 
    const ignore = ['external_result', 'internal_result', 'roadmap'];

    for (let issue of issues) {
      for (let label of issue.labels)
        if (ignore.indexOf(label) === -1) {
          const index = labelList.indexOf(label);
          if (index === -1) {
            labelList.push(label);
            labelModels.push({name: label, count: 1, issues: [issue]});
          } else {
            labelModels[index].count = labelModels[index].count + 1;
            labelModels[index].issues.push(issue);
          }
          break;
        }
    }
    return labelModels;
  }

  /**
   * The list of work days within a specified range.
   * 
   * @param first the earliest date
   * @param last the latest date
   */
  private getWorkDays(first: Date, last: Date): Date[] {
    const dates = [];
    let current = first;

    while (current.getTime() <= last.getTime()) {
      // Do not push the date if the weekday is Sunday or Saturday
      if (current.getDay() !== 0 && current.getDay() !== 6)
        dates.push(current);
      const next = new Date(current);
      next.setDate(current.getDate() + 1);
      current = next;
    }
    return dates;
  }

  /**
   * Create an issue model for the frontend
   */
  public makeIssue(json): Issue {
    return {
      key: json.key,
      summary: json.fields.summary,
      labels: json.fields.labels,
      issuetype: json.fields.issuetype.name,
      duedate: new Date(json.fields.duedate),
      timetracking: json.fields.timetracking.originalEstimate,
      estimationdays: (json.fields.timetracking.originalEstimateSeconds / 60) / (60*8),
      description: json.fields.description
    }
  }
}
