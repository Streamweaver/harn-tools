import { Component, OnInit } from '@angular/core';
import { IManor } from '../shared/models/imanor.model';
import { ManorService } from '../shared/manor.service';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: IManor;

  constructor(private manorService: ManorService) {}

  ngOnInit() {
    this.manor = this.manorService.getManor();
  }

  private _reset() {
    this.manorService.resetManor();
  }

  onResetClick() {
    this._reset();
  }

}
