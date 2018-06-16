
/**
 * The frontend model of a task board issue
 */
export interface Issue {
    key: string;
    summary: string;
    labels: string[];
    issuetype: string;
    duedate: Date;
    estimationdays: number;
    timetracking: string;
    description: string;
  }