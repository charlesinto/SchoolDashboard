import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { School } from './schools.component';
import { environment } from 'environments/environment';
import { User } from '../../../core/auth/_models/user.model';
import { ISchoolByState } from './school-by-state/school-by-state.component';
import { ISchoolByLGA } from './school-lga/school-lga.component';

// const BASE_URL = 'https://school-census.herokuapp.com';
const BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';
const GET_ALL_SCHOOLS = '/api/v1/school/get-schools';
const GET_SCHOOL_BY_STATE = '/api/v1/school/get-schools-by-state';
@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  constructor(private http: HttpClient) {}
  getSchools(): Observable<School[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    console.log('user: ', user);
    return this.http
      .get<School[]>(`${BASE_URL}${GET_ALL_SCHOOLS}/${user.state_access}`, {
        headers: new HttpHeaders({
          Authorization: user.accessToken,
        }),
      })
      .pipe(
        map((response: any) => {
          const schools: School[] = [];
          response['data'].forEach((item) => {
            schools.push({
              id: item.id,
              address: item.address,
              district: item.district,
              principal: item.principal,
              telephoneNumber: item.telephonenumber,
              mailingAddress: item.mailingaddress,
              schoolName: item.schoolname,
              schoolNumber: item.schoolnumber,
              lga: item.lga,
              state: item.state,
              typeOfSchool: item.typeofschool,
              genderCategory: item.gendercategory,
              dateOfEstablishment: item.dateofestablishment,
              owner: item.owner,
              recognitionStatus: item.recognitionstatus,
              schoolDistance: item.schooldistance,
              boardingFacility: item.boardingfacility,
              pta: item.pta,
              classRoomNumber: item.classroomnumber,
              enoughSeats: item.enoughseats,
              libraryNumber: item.librarynumber,
              laboratoryNumber: item.laboratorynumber,
              schoolCondition: item.schoolcondition,
              schoolCoordinate: item.schoolcoordinate,
              localid: item.localid,
            });
          });
          return schools;
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
  getSchoolByState(): Observable<ISchoolByState[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get<ISchoolByState[]>(
        `${BASE_URL}${GET_SCHOOL_BY_STATE}/${user.state_access}`
      )
      .pipe(
        map((response: any) => {
          const data: ISchoolByState[] = [];
          response['data'].forEach((item) => {
            data.push({
              count: item.count,
              state: item.state,
            });
          });
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
  getSchoolByLGA(): Observable<ISchoolByLGA[]> {
    const user: User = JSON.parse(
      localStorage.getItem(environment.authTokenKey)
    );
    return this.http
      .get<ISchoolByLGA[]>(
        `${BASE_URL}/api/v1/school/get-schools-by-lga/${user.state_access}`
      )
      .pipe(
        map((response: any) => {
          const data: ISchoolByLGA[] = [];
          response['data'].forEach((item) => {
            data.push({
              count: item.count,
              state: item.state,
              lga: item.lga,
            });
          });
          return data;
        }),
        catchError(this.handleHttpError)
      );
  }
}
