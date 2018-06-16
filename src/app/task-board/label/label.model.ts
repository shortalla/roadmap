import { Issue } from "../issue/issue.model";

/**
 * The frontend model of a label for issues
 */
export interface Label {
    name: string;
    issues: Issue[];
    count: number;
  }