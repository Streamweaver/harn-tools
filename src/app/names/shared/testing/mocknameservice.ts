import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {IGivenNames} from '../i-given-names';
import {HttpClient} from '@angular/common/http';


export class MockNamesService {
  lastNames: Observable<string[]>;
  givenNames: Observable<IGivenNames>;

  getLastNames(): Observable<string[]> {
    this.lastNames = Observable.of(['Lennon', 'McCartney', 'Starr', 'Harrison']);
    return this.lastNames;
  }

  getGivenNames(): Observable<IGivenNames> {
    this.givenNames = Observable.of({
      male: ['John', 'Paul', 'Ringo', 'George'],
      female: ['Yoko', 'Linda', 'Barbara', 'Olivia']
    });
    return this.givenNames;
  }
}
