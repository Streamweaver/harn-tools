import { Component, OnInit } from '@angular/core';
import { NamesService } from '../shared/names.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.scss']
})
export class NameGeneratorComponent implements OnInit {
  lastNames: string[];

  constructor(private nameService: NamesService) { }

  ngOnInit() {
    this.getLastNames();
  }

  getLastNames(): void {
    this.nameService.getLastNames().subscribe((lastNames => this.lastNames = lastNames));
  }

}
