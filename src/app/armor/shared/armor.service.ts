import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ArmorEntryModel } from './armor-entry.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArmorService {
  private armorList: Observable<ArmorEntryModel[]>;

  constructor(private http: HttpClient) { }

  loadArmor(): Observable<ArmorEntryModel[]> {
    this.armorList = this.http.get<ArmorEntryModel[]>('assets/data/armor.data.json');
    return this.armorList;
  }
}
