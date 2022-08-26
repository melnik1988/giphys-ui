import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { giphy } from '../interface/giphy';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetGiphysService {
  private server_url = environment.server_url;

  constructor(private http: HttpClient) { }

  getGiphys(value: string[]): Observable<Array<giphy>> {
    return this.http.get<Array<giphy>>(this.server_url + value).pipe(catchError(this.handleError<Array<giphy>>('getGiphys', )));
  }

  // private log(message: string) {
  //   this.messageService.add(`UserService: ${message}`);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
