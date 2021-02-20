import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../../core/auth/_models/user.model';
import { Teacher } from './teachers.component';
import { ITeacherQualificationByState } from './teacher-by-qualification/teacher-by-qualification.component';
import {
  ITeacherAttendanceReport,
  ITeacherAttendanceQueryParams,
} from './teacher-attendance/teacher-attendance.component';
import { IAttendanceSummary } from '../students/student-attendance/student-attendance.component';
import {
  ITeacherAttendaceQueryDetail,
  ITeacherAttendanceDetail,
} from './teacher-report-detail/teacher-report-detail.component';

const BASE_URL = 'https://school-census.herokuapp.com';
const GET_ALL_SCHOOLS = '/api/v1/teacher/get-teachers';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private http: HttpClient) {}
  getTeachers() {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(`${BASE_URL}${GET_ALL_SCHOOLS}/${user.state_access}`)
      .pipe(
        map((response: any) => {
          const teachers: Teacher[] = [];
          response['data'].forEach((item) => {
            teachers.push({
              remarks: item['remarks'],
              exitDate: item['exitdate'],
              email: item['email'],
              residentNumber: item['residentnumber'],
              pfaNumber: item['pfanumber'],
              telePhoneNumber: item['telephonenumber'],
              homeAddress: item['homeaddress'],
              school: item['school'],
              dateOfPromotion: item['dateofpromotion'],
              dateOfConfirmation: item['dateOfconfirmation'],
              dateOfInterStateTravel: item['dateOfinterstatetravel'],
              dateOfFirstAppointment: item['dateofpromotion'],
              dateOfBirth: item['dateofbirth'],
              qualification: item['qualification'],
              gradeLevel: item['gradelevel'],
              designation: item['designation'],
              maidenName: item['maidenname'],
              gender: item['gender'],
              otherNames: item['othernames'],
              surname: item['surname'],
              registrationNumber: item['registrationnumber'],
              oracleNumber: item['oraclenumber'],
              state: item['state'],
              schoolName: item['schoolname'],
              schoolId: item['schoolId'],
              qualificationDate: item['qualificationdate'],
              salarySource: item['salarysource'],
              subjectTaught: item['subjecttaught'],
              teacherClass: item['teacherclass'],
              teachingType: item['teachingtype'],
              profile_url: item['profile_url'],
              leftThumb: item['leftthumb'],
              leftThumbTemplate: item['leftthumbtemplate'],
              rightThumb: item['rightthumb'],
              rightThumbTemplate: item['rightthumbtemplate'],
              localid: item['localid'],
            });
          });
          console.log(response);
          return teachers;
        }),
        catchError(this.handleHttpError)
      );
  }
  getTeacherAttendanceReportAll(): Observable<ITeacherAttendanceReport[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(
        `${BASE_URL}/api/v1/attendance/teacher/get-all-attendance-report?state=${user.state_access}`
      )
      .pipe(
        map((response) => {
          const data: ITeacherAttendanceReport[] = [];
          response['response'].forEach((item) =>
            data.push({ date: item.data, count: item.count })
          );
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
  getAttendanceReportDetail(params: ITeacherAttendaceQueryDetail) {
    return this.http.post(`${BASE_URL}/`, params);
  }
  getAttendanceReport(
    params: ITeacherAttendanceQueryParams
  ): Observable<IAttendanceSummary[]> {
    return this.http
      .post<IAttendanceSummary[]>(
        `${BASE_URL}/api/v1/attendance/teachers/get-attendance-report`,
        params
      )
      .pipe(
        map((response) => {
          const data: IAttendanceSummary[] = [];
          response['data'].forEach((item) =>
            data.push({ count: item['count'], date: item['date'] })
          );
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
  getTeacherAttendanceReportDetail(
    params: ITeacherAttendaceQueryDetail
  ): Observable<ITeacherAttendanceDetail[]> {
    return this.http
      .post<ITeacherAttendanceDetail[]>(
        `${BASE_URL}/api/v1/attendance/teachers/get-attendance-report-detail`,
        params
      )
      .pipe(
        map((response) => {
          const data: ITeacherAttendanceDetail[] = [];
          response['data'].forEach((item) =>
            data.push({
              attendanceDate: item['date'],
              oracleNumber: item['oraclenumber'],
              fullName: `${item['surname']} ${item['othernames']}`,
              status: item['status'],
            })
          );
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
  getTeachersQualificationByState(): Observable<
    ITeacherQualificationByState[]
  > {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get<ITeacherQualificationByState[]>(
        `${BASE_URL}/api/v1/teacher/filter-report/state?state=${user.state_access}`
      )
      .pipe(
        map((response: any) => {
          const data: ITeacherQualificationByState[] = [];
          response.forEach((item) => {
            data.push({
              count: item.count,
              qualification: item.qualification,
              state: item.state,
            });
          });
          console.log(response);
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
  handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error);
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
