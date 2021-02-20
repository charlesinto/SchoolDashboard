import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { IDashboardReport } from './dashboard.component';
import { Observable, throwError } from 'rxjs';
import { ISchoolByState } from '../schools/school-by-state/school-by-state.component';

const BASE_URL = 'https://school-census.herokuapp.com';
import { environment } from 'environments/environment';

import { User } from '../../../core/auth/_models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardSettings(): Observable<IDashboardReport> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get<IDashboardReport>(
        `${BASE_URL}/api/v1/dashboard?state_access=${user.state_access}`
      )
      .pipe(
        map((data: any) => {
          const dataSet: IDashboardReport = {
            schoolCount: data['schoolCount'],
            teacherCount: data['teacherCount'],
            studentCount: data['studentCount'],
          };
          return dataSet;
        }),
        catchError(this.handleHttpError)
      );
  }
  handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
      console.error(error.error);
    }

    // If you want to return a new response:
    //return of(new HttpResponse({body: [{name: "Default value..."}]}));

    // If you want to return the error on the upper level:
    //return throwError(error);

    // or just return nothing:
    return throwError(error);
  }
}
