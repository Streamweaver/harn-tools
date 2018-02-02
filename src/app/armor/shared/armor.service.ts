import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Armor } from './armor-entry.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArmorService {
  private armorList: Observable<Armor[]>;

  constructor(private http: HttpClient) { }

  loadArmor(): Observable<Armor[]> {
    this.armorList = this.http.get<Armor[]>('assets/data/armor.data.json');
    return this.armorList;
  }
}
