import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { throwError, Observable } from 'rxjs';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
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
import { IQualificationBySchool } from './teachers-qualification-by-school/teachers-qualification-by-school.component';
import { ISubJectDistribution } from './subject-distribution/subject-distribution.component';
import { IAssessmentSummary } from './teacher-modal-view/teacher-modal-view.component';

// const BASE_URL = 'https://school-census.herokuapp.com';
const BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';
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
      .get(`${BASE_URL}${GET_ALL_SCHOOLS}/${user.state_access}`, {
        headers: new HttpHeaders({
          Authorization: user.accessToken,
        }),
      })
      .pipe(
        map((response: any) => {
          const teachers: Teacher[] = [];
          response['data'].forEach((item) => {
            teachers.push({
              otherNames: item['othernames'],
              surname: item['surname'],
              gradeLevel: item['gradelevel'],
              designation: item['designation'],
              maidenName: item['maidenname'],
              gender: item['gender'],

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
              profile_url: item['profile_url'],
              leftThumb: item['leftthumb'],
              leftThumbTemplate: item['leftthumbtemplate'],
              rightThumb: item['rightthumb'],
              rightThumbTemplate: item['rightthumbtemplate'],
              localid: item['localid'],
              id: item['id'],
            });
          });
          // console.log(response);
          return teachers;
        }),
        catchError(this.handleHttpError)
      );
  }
  getCoachingReportByState(
    state?: string,
    lga?: string,
    startDate?: string,
    endDate?: string,
    school?: string
  ) {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(
        `${BASE_URL}/api/v1/coaching-mentoring/get-report-by-state?state=${state}&lga=${lga}&startDate=${startDate}&endDate=${endDate}&school=${school}`,
        {
          headers: new HttpHeaders({
            Authorization: user.accessToken,
          }),
        }
      )
      .pipe(
        map((response) => response['data']),
        catchError(this.handleHttpError)
      );
  }
  getCoachingReportByStateDrillDownCategory(
    category?: string,
    state?: string,
    lga?: string,
    startDate?: string,
    endDate?: string,
    school?: string
  ) {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(
        `${BASE_URL}/api/v1/coaching-mentoring/get-report-by-state-drilldow-by-category?category=${category}&state=${state}&lga=${lga}&startDate=${startDate}&endDate=${endDate}&school=${school}`,
        {
          headers: new HttpHeaders({
            Authorization: user.accessToken,
          }),
        }
      )
      .pipe(
        map((response) => ({
          data: response['data'].sort((item1: any, item2: any) => {
            if (new Date(item1.date) > new Date(item2.date)) {
              return -1;
            } else if (new Date(item1.date) < new Date(item2.date)) {
              return 1;
            }
            return 0;
          }),
          totalRecord: 1000,
        })),
        catchError(this.handleHttpError)
      );
  }
  getCoachingAssessmentByID(id: number): Observable<any> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(`${BASE_URL}/api/v1/coaching-mentoring/${id}`, {
        headers: new HttpHeaders({
          Authorization: user.accessToken,
        }),
      })
      .pipe(
        map((response) => response['data']),
        catchError(this.handleHttpError)
      );
  }
  getCoachingSummaryByTeacherID(
    id: number,
    start = 0,
    count = 1000
  ): Observable<{ data: IAssessmentSummary[]; totalRecord: number }> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );

    return this.http
      .get(
        `${BASE_URL}/api/v1/coaching-mentoring/teacher/${id}?start=${start}&count=${count}`,
        {
          headers: new HttpHeaders({
            Authorization: user.accessToken,
          }),
        }
      )
      .pipe(
        map((response) => ({
          data: response['data'].sort((item1: any, item2: any) => {
            if (new Date(item1.date) > new Date(item2.date)) {
              return -1;
            } else if (new Date(item1.date) < new Date(item2.date)) {
              return 1;
            }
            return 0;
          }),
          totalRecord: response['totalRecord'],
        })),
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
  getTeacherSubjectDistribution(): Observable<ISubJectDistribution[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get<ISubJectDistribution[]>(
        `${BASE_URL}/api/v1/teacher/filter-report/teacher-subject-distribution?state=${user.state_access}`
      )
      .pipe(catchError(this.handleHttpError));
  }
  getTeachersQualificationBySchool(): Observable<IQualificationBySchool[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get<IQualificationBySchool[]>(
        `${BASE_URL}/api/v1/teacher/qualification/filter-report-by-school/state?state=${user.state_access}`
      )
      .pipe(
        map((response: any) => {
          const data: IQualificationBySchool[] = [];
          response.forEach((item) => {
            data.push({
              count: item.count,
              qualification: item.qualification,
              state: item.state,
              schoolName: item.schoolname,
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
