import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

/**
 * Service for interactions with API endpoints
 */
@Injectable()
export class ApiService {
  
  constructor(private httpClient: HttpClient) {}

  /**
   * The complete list of issues
   */
  public listIssues(): Observable<any> {
    return this.httpClient.get(
      environment.API_URL + '/rest/api/2/search'
    );
  }
}