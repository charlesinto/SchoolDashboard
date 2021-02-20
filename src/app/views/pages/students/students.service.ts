import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../../core/auth/_models/user.model';
import { environment } from 'environments/environment';
import { Student } from './students.component';
import { IStudentGenderReport } from './students-by-gender/students-by-gender.component';
import {
  IStudentAttendanceReport,
  IQueryAttendanceParams,
  IAttendanceSummary,
} from './student-attendance/student-attendance.component';
import {
  IQueryAttendanceDetail,
  IStudentAttendaceQuickView,
  IStudentAttendanceDetail,
} from './attendance-report-detail/attendance-report-detail.component';

const BASE_URL = 'https://school-census.herokuapp.com';
const GET_ALL_STUDENTS = '/api/v1/student/get-students';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(`${BASE_URL}${GET_ALL_STUDENTS}/${user.state_access}`)
      .pipe(
        map((response) => {
          console.log(response);
          const students: Student[] = [];
          response['data'].forEach((item) => {
            students.push({
              medicalCondition: item['address'],
              guardianAddress: item['guardianaddress'],
              motherFullName: item['motherfullname'],
              motherOccupation: item['motheroccupation'],
              fatherFullName: item['fatherfullname'],
              fatherOccupation: item['fatheroccupation'],
              fatherTelephone: item['address'],
              address: item['address'],
              school: item['school'],
              admissionNumber: item['admissionNumber'],
              hobby: item['hobby'],
              dateOfAdmission: item['dateofadmission'],
              dateOfBirth: item['dateofbirth'],
              religion: item['religion'],
              town: item['town'],
              gender: item['gender'],
              otherNames: item['othernames'],
              surname: item['surname'],
              registrationNumber: item['registrationnumber'],
              studentClass: item['studentclass'],
              newEntrant: item['newEntrant'],
              schoolId: item['schoolid'],
              placeOfBirth: item['placeofbirth'],
              studentflow: item['studentflow'],
              primarySchoolAttendedDate: item['primaryschoolattendedDate'],
              previousClass: item['previousclass'],
              fatherAddress: item['fatherAddress'],
              motherAddress: item['motheraddress'],
              motherTelephone: item['mothertelephone'],
              guardianTelephone: item['guardiantelephone'],
              guardianName: item['guardianname'],
              profile_url: item['profile_url'],
              leftThumb: item['leftthumb'],
              leftThumbTemplate: item['leftthumbtemplate'],
              rightThumb: item['rightthumb'],
              rightThumbTemplate: item['rightthumbtemplate'],
              leftRET: item['leftret'],
              leftFingerPrintId: item['leftfingerprintid'],
              rightRET: item['rightret'],
              rightFingerPrintId: item['rightfingerprintid'],
              localid: item['localid'],
            });
          });
          return students;
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

  getStudentGenderReport(): Observable<IStudentGenderReport[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get(
        `${BASE_URL}/api/v1/student/get-student-gender-report?state=${user.state_access}`
      )
      .pipe(
        map((response: any[]) => {
          const data: IStudentGenderReport[] = [];
          response.forEach((item) => {
            data.push({
              schoolName: item.schoolname,
              gender: item.gender,
              studentClass: item.studentclass,
              count: item.count,
            });
          });
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }

  getAttendanceReportByFilteredParams(
    params: IQueryAttendanceParams
  ): Observable<IAttendanceSummary[]> {
    return this.http
      .post(`${BASE_URL}/api/v1/attendance/filter-report`, params)
      .pipe(
        map((response) => {
          const data: IAttendanceSummary[] = [];
          response['data'].forEach((item) =>
            data.push({ date: item['date'], count: item['count'] })
          );
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }

  getAttendanceDetail(
    params: IQueryAttendanceDetail
  ): Observable<IStudentAttendanceDetail[]> {
    return this.http
      .post<IStudentAttendanceDetail[]>(
        `${BASE_URL}/api/v1/attendance/get-attendance-report-detail`,
        params
      )
      .pipe(
        map((response) => {
          const dt: IStudentAttendaceQuickView[] = response['data'];
          const data: IStudentAttendanceDetail[] = [];
          dt.forEach((item) => {
            data.push({
              fullName: `${item.othernames} ${item.surname}`,
              female: item.gender.toLowerCase() === 'female',
              male: item.gender.toLowerCase() === 'male',
              school: item.school,
              status: item.status,
              class: item.studentclass,
              attendanceDate: params.attendanceDate,
            });
          });
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }

  getAttendanceReport(): Observable<IStudentAttendanceReport[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    if (user.state_access.toLowerCase() === 'all')
      return this.http
        .get(`${BASE_URL}/api/v1/attendance/get-attendance-report`)
        .pipe(
          map((response: any[]) => {
            const data: IStudentAttendanceReport[] = [];
            response.forEach((item) => {
              data.push({
                school: item.school,
                gender: item.gender,
                date: item.date,
                count: item.count,
                studentClass: item.studentclass,
              });
            });
            return data;
          }),
          catchError(this.handleHttpError)
        );

    return this.http
      .get(
        `${BASE_URL}/api/v1/attendance/filter-attendance-report-by-state?state=${user.state_access}`
      )
      .pipe(
        map((response) => {
          const data: IStudentAttendanceReport[] = [];
          response['response'].forEach((item) => {
            data.push({
              school: item.school,
              gender: item.gender,
              date: item.date,
              count: item.count,
              studentClass: item.studentclass,
            });
          });
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
}
