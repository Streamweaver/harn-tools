import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annnual-report',
  templateUrl: './annnual-report.component.html',
  styleUrls: ['./annnual-report.component.scss']
})
export class AnnnualReportComponent implements OnInit {
  @Input('manor') manor: Manor;

  constructor() { }

  ngOnInit() {
  }

}
