import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Armor } from './armor.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArmorService {
  private armorList: Observable<Armor[]>;

  constructor(private http: HttpClient) {}

  loadArmor(): Observable<Armor[]> {
    if (!this.armorList) {
      this.armorList = this.http.get<Armor[]>('assets/data/armor.data.json');
    }
    return this.armorList;
  }
}
