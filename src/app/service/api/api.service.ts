import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://warm-atoll-37731.herokuapp.com/";
  header: HttpHeaders;
  constructor(private http: HttpClient) { }
  get(endpoint: string, optHeaders?: HttpHeaders) {
    return this.http
      .get(this.url + "/" + endpoint,  {
        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  post(endpoint: string, body: any, optHeaders?: HttpHeaders) {
    return this.http
      .post(this.url + "/" + endpoint, body, {

        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  put(endpoint: string, body: any, optHeaders?: HttpHeaders) {
    return this.http
      .put(this.url + "/" + endpoint, body, {

        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  delete(endpoint: string, optHeaders?: HttpHeaders) {
    return this.http
      .delete(this.url + "/" + endpoint, {
        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  // another method which will use for operations
  extractData = (response: HttpResponse<any>) => {
    return response.body || response.status;
  }
  // error handle method
  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.status)
    return throwError(errorResponse);
  }
 
}