import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/data/api-response.model';
import { ExceptionService } from './exception.service';
import { User } from '../models/data/user.model';
import { RowColumnConfig } from '../models/ui/data-row.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private exceptionService: ExceptionService,
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get<ApiResponse<User[]>>(environment.api_url + '/api/user').pipe(
      catchError(this.exceptionService.handleError.bind(this.exceptionService))
    )
  }

  createUser(userData: Partial<User>) {
    return this.http.post<ApiResponse<User>>(environment.api_url + '/api/user', userData).pipe(
      catchError(this.exceptionService.handleError)
    )
  }

  getRowData(user: User): RowColumnConfig[] {
    const fullName = `${user.lastName}, ${user.firstName} ${user.middleName}`;
    const idNumber = user.idNumber;
    const status = user.account_status;
    const depts = [...new Set(user.roles.map(role => role.department).map(dept=> dept.code))];
    const roles = [...new Set(user.roles.map(role => role.role))];
    return [
      { id: 0, type: 'image', header: '', image: undefined },
      { id: 1, type: 'title', header: 'Name', content: fullName, subtitle: `ID: ${idNumber}`, weight: 2.5 },
      { id: 2, type: 'text', header: 'Departments', content: depts, weight: 2 },
      { id: 3, type: 'text', header: 'Role', content: roles, weight: 2 },
      { id: 5, type: 'badge', header: 'Status', content: status, weight: 1.5 },
      { id: 6, type: 'action', header: '', actions: [], weight: 1 },
    ];
  }

  
}
