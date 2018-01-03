import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IGivenNames } from './i-given-names';


@Injectable()
export class NamesService {
  lastNames: Observable<string[]>;
  givenNames: Observable<IGivenNames>;

  constructor(private http: HttpClient) {}

  getLastNames(): Observable<string[]> {
    this.lastNames = this.http.get<string[]>('/assets/data/englishSurnames.data.json');
    return this.lastNames;
  }

  getGivenNames(): Observable<IGivenNames> {
    this.givenNames = this.http.get<IGivenNames>('/assets/data/englishGivenNames.data.json');
    return this.givenNames;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('Names Service: ' + message);
  }
}
