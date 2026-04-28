import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/data/deparment.model';
import { ApiResponse } from '../models/data/api-response.model';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs';
import { ExceptionService } from './exception.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService,
  ) {}

  getDepartments() {
    return this.http.get<ApiResponse<Department[]>>(environment.api_url + '/api/department').pipe(catchError(this.exceptionService.handleError));
  }

  getDepartmentById(id: string) {
    return this.http.get<ApiResponse<Department>>(environment.api_url + '/api/department/' + id).pipe(catchError(this.exceptionService.handleError));
  }
}
