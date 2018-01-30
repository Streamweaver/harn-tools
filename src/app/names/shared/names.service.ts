import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {NameData} from './name-data.model';


@Injectable()
export class NamesService {
  private nameData: Observable<NameData>;

  constructor(private http: HttpClient) {
  }

  getEnglishNames(): Observable<NameData> {
    return this.getNames('assets/data/EnglishNames.data.json');
  }

  getWelshNames(): Observable<NameData> {
    return this.getNames('assets/data/WelshNames.data.json');
  }

  getSaxonNames(): Observable<NameData> {
    return this.getNames('assets/data/SaxonNames.data.json');
  }

  getScandinavianNames(): Observable<NameData> {
    return this.getNames('assets/data/ScandinavianNames.data.json');
  }

  /**
   * Loads name data from the named file.
   * @param {string} f string of namedata json file
   */
  private getNames(f: string): Observable<NameData> {
    this.nameData = this.http.get<NameData>(f);
    return this.nameData;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
