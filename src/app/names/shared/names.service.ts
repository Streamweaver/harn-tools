import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IGivenNames } from './i-given-names';
import {NameData} from './name-data.model';


@Injectable()
export class NamesService {
  lastNames: Observable<string[]>;
  givenNames: Observable<IGivenNames>;
  nameData: Observable<NameData>;

  constructor(private http: HttpClient) {}

  getEnglishNames(): Observable<NameData> {
    this.nameData = this.http.get<NameData>('/assets/data/EnglishNames.data.json');
    return this.nameData;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
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
