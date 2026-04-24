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

  getRowData(user: User): RowColumnConfig[] {
    const fullName = `${user.lastName}, ${user.firstName} ${user.middleName}`;
    return [
      { id: 0, type: 'image', header: '', image: undefined },
      { id: 1, type: 'title', header: 'Header 1', content: fullName, subtitle: 'Lorem Ipsum', weight: 2.5 },
      { id: 2, type: 'text', header: 'Header 2', content: 'Lorem Ipsum', weight: 2 },
      { id: 3, type: 'text', header: 'Header 3', content: 'Lorem Ipsum', weight: 2 },
      { id: 4, type: 'text', header: 'Header 4', content: '1', weight: 1 },
      { id: 5, type: 'badge', header: 'Header 5', content: ['1 lorem'], weight: 1.5 },
      { id: 6, type: 'text', header: 'Header 6', content: 'Lorem Ipsum', weight: 1.5 },
      { id: 7, type: 'action', header: '', actions: [{ type: 'icon', name: 'edit', tooltip: 'Edit' }], weight: 1 },
    ];
  }

  
}
