import { Component, OnInit } from '@angular/core';
import { NamesService } from '../shared/names.service';
import { IGivenNames } from '../shared/i-given-names';
import { Gender } from '../shared/gender.enum';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.scss']
})
export class NameGeneratorComponent implements OnInit {
  selectedGender: Gender;
  gender = Gender;
  lastNames: string[];
  givenNames: IGivenNames;
  generatedNames: string[];
  genderChoices = Gender;
  genderValues = Object.values(Gender).filter( e => typeof( e ) === 'number' );

  constructor(private nameService: NamesService) { }

  ngOnInit() {
    this.loadNames();
    this.generatedNames = [];
    this.onGenderSelect(Gender.FEMALE);
  }

  loadNames(): void {
    this.nameService.getLastNames().subscribe(
      lastNames => { this.lastNames = lastNames; },
      err => console.log(err),
      () => console.log('Last Names Loaded!'));
    this.nameService.getGivenNames().subscribe(
      givenNames => { this.givenNames = givenNames; },
      err => console.log(err),
      () => console.log('Given names loaded!')
      );
  }

  onGenderSelect(g: Gender) {
    this.selectedGender = g;
    this.generateRandomNames(10);
  }

  generateRandomNames(n: number) {
    const result: string[] = [];
    const gn = (this.selectedGender === Gender.FEMALE) ? this.getFemaleFirstNames(n) : this.getMaleFirstNames(n);
    const sn = this.getRandomSurnames(n);
    for (let i = 0; i < n; i++) {
      result.push(gn[i] + ' ' + sn[i]);
    }
    this.generatedNames = result;
  }

  private getMaleFirstNames(n: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < n; i++) {
      result.push(this.givenNames.male[Math.floor(Math.random() * this.givenNames.male.length)]);
    }
    return result;
  }

  private getFemaleFirstNames(n: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < n; i++) {
      result.push(this.givenNames.female[Math.floor(Math.random() * this.givenNames.female.length)]);
    }
    return result;
  }

  private getRandomSurnames(n: number = 1): string[] {
    const result: string[] = [];
    for (let i = 0; i < n; i++) {
      result.push(this.lastNames[Math.floor(Math.random() * this.lastNames.length)]);
    }
    return result;
  }
}
