import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../_models/user.model';
import { Permission } from '../_models/permission.model';
import { Role } from '../_models/role.model';
import { catchError, map } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '../../_base/crud';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

const API_USERS_URL = 'api/users';
const API_PERMISSION_URL = 'api/permissions';
const API_ROLES_URL = 'api/roles';

// const BASE_URL = 'https://school-census.herokuapp.com';
const BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';
const LOGIN_URL = '/api/v1/auth/login';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  // Authentication/Authorization
  login(email: string, password: string): Observable<User> {
    // return this.http.post<User>(API_USERS_URL, { email, password });
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http
      .post<User>(
        `${BASE_URL}${LOGIN_URL}`,
        { uid: email, password },
        { headers: httpHeaders }
      )
      .pipe(
        map((data: any) => {
          const user: User = {
            firstname: data['user']['firstName'],
            accessToken: data['token'],
            authToken: data['token'],
            lastname: data['user']['lastName'],
            phone: data['user']['phonenumber'],
            state_access: data['user']['state_access'],
            pic: './assets/media/users/300_25.jpg',
            occupation: 'ADMIN',
            roles: [1],
            username: data['user']['firstName'],
            fullname: data['user']['firstName'],
            socialNetworks: {
              facebook: 'https://facebook.com/admin',
              linkedIn: 'https://linkedin.com/admin',
              twitter: 'https://twitter.com/admin',
              instagram: 'https://instagram.com/admin',
              clear: function () {},
            },
            clear: function () {},
          };
          // localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem(environment.authTokenKey, JSON.stringify(user));
          return user;
        }),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      );
  }

  getUserByToken(): Observable<User> {
    const userToken = localStorage.getItem(environment.authTokenKey);
    // const httpHeaders = new HttpHeaders();
    // console.log('called 1');
    // httpHeaders.set('Authorization', 'Bearer ' + userToken);
    return of(JSON.parse(localStorage.getItem(environment.authTokenKey)));
    // return this.http.get<User>(API_USERS_URL, { headers: httpHeaders });
  }

  register(user: User): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http
      .post<User>(API_USERS_URL, user, { headers: httpHeaders })
      .pipe(
        map((res: User) => {
          return res;
        }),
        catchError((err) => {
          return null;
        })
      );
  }

  public createUser(payload: any) {
    return this.http
      .post(BASE_URL + '/api/v1/auth/create-user', payload)
      .pipe(catchError(this.handleHttpError));
  }
  public bulkUserCreate(payload: any) {
    return this.http
      .post(BASE_URL + '/api/v1/auth/bulk-user-create', payload)
      .pipe(catchError(this.handleHttpError));
  }
  handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
      console.error(error.error);
    }
    return throwError(error);
  }

  /*
   * Submit forgot password request
   *
   * @param {string} email
   * @returns {Observable<any>}
   */
  public requestPassword(email: string): Observable<any> {
    return this.http
      .get(API_USERS_URL + '/forgot?=' + email)
      .pipe(catchError(this.handleError('forgot-password', [])));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_USERS_URL);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(API_USERS_URL + `/${userId}`);
  }

  // DELETE => delete the user from the server
  deleteUser(userId: number) {
    const url = `${API_USERS_URL}/${userId}`;
    return this.http.delete(url);
  }

  // UPDATE => PUT: update the user on the server
  updateUser(_user: User): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
  }

  // CREATE =>  POST: add a new user to the server
  // createUser(user: User): Observable<User> {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.set('Content-Type', 'application/json');
  //   return this.http.post<User>(API_USERS_URL, user, { headers: httpHeaders });
  // }

  // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
  // items => filtered/sorted result
  findUsers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<QueryResultsModel>(
      API_USERS_URL + '/findUsers',
      queryParams,
      { headers: httpHeaders }
    );
  }

  // Permission
  getAllPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(API_PERMISSION_URL);
  }

  getRolePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(
      API_PERMISSION_URL + '/getRolePermission?=' + roleId
    );
  }

  // Roles
  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_ROLES_URL);
  }

  getRoleById(roleId: number): Observable<Role> {
    return this.http.get<Role>(API_ROLES_URL + `/${roleId}`);
  }

  // CREATE =>  POST: add a new role to the server
  createRole(role: Role): Observable<Role> {
    // Note: Add headers if needed (tokens/bearer)
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<Role>(API_ROLES_URL, role, { headers: httpHeaders });
  }

  // UPDATE => PUT: update the role on the server
  updateRole(role: Role): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
  }

  // DELETE => delete the role from the server
  deleteRole(roleId: number): Observable<Role> {
    const url = `${API_ROLES_URL}/${roleId}`;
    return this.http.delete<Role>(url);
  }

  // Check Role Before deletion
  isRoleAssignedToUsers(roleId: number): Observable<boolean> {
    return this.http.get<boolean>(
      API_ROLES_URL + '/checkIsRollAssignedToUser?roleId=' + roleId
    );
  }

  findRoles(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
    // This code imitates server calls
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<QueryResultsModel>(
      API_ROLES_URL + '/findRoles',
      queryParams,
      { headers: httpHeaders }
    );
  }

  /*
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
