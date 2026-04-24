import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { ExceptionService } from './exception.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private exceptionService: ExceptionService,
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get(environment.api_url + '/api/users').pipe(
      catchError(this.exceptionService.handleError.bind(this.exceptionService))
    )
  }

  
}
