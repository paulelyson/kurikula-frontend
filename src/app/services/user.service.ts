import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/data/api-response.model';
import { ExceptionService } from './exception.service';
import { User } from '../models/data/user.model';

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

  
}
