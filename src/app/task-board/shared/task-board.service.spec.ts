import { TestBed, inject } from '@angular/core/testing';

import { TaskBoardService } from './task-board.service';

describe('TaskBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskBoardService]
    });
  });

  it('should be created', inject([TaskBoardService], (service: TaskBoardService) => {
    expect(service).toBeTruthy();
  }));
});
