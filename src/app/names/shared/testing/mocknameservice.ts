import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {NameData} from '../name-data.model';


export class MockNamesService {


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

  private getNames(url: string): Observable<NameData> {
    const nameDataFixture: NameData = {
      givenNames: {
        male: ['John', 'George', 'Ringo', 'Paul'],
        female: ['Joan', 'Lita', 'Cheri', 'Vicki']
      },
      surnames: []
    };
    return Observable.of(nameDataFixture);
  }
}
