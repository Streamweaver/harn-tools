import { Component, OnInit } from '@angular/core';
import { NamesService } from '../shared/names.service';
import { IGivenNames } from '../shared/i-given-names';
import { Gender } from '../shared/gender.enum';
import { Culture } from '../shared/culture.enum';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.scss']
})
export class NameGeneratorComponent implements OnInit {
  showSpinner: boolean;
  selectedGender: Gender;
  selectedCulture: Culture;
  gender = Gender;
  culture = Culture;
  givenNames: IGivenNames;
  surnames: string[];
  generatedNames: string[];
  nameData: {
      [key: number]: {
        givenNames: IGivenNames,
        lastNames: string[]
      },
    };

  constructor(private namesService: NamesService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.generatedNames = [];
    this.selectedGender = Gender.FEMALE;
    this.selectedCulture = Culture.ENGLISH;
    this.loadNames();
    this.generateRandomNames(10);
  }

  loadNames(): void {
    switch (this.selectedCulture) {
      case Culture.ENGLISH:
        this.namesService.getEnglishLastNames().subscribe(
          lastNames => { this.surnames = lastNames; },
          err => console.log(err));
        this.namesService.getEnglishGivenNames().subscribe(
          givenNames => { this.givenNames = givenNames; },
          err => console.log(err));
        break;
      case Culture.WELSH:
        this.namesService.getWelshGivenNames().subscribe(
          givenNames => { this.givenNames = givenNames; },
          err => console.log(err));
        this.surnames = [];
        break;
      case Culture.SAXON:
        this.namesService.getSaxonGivenNames().subscribe(
          givenNames => { this.givenNames = givenNames; },
          err => console.log(err));
        break;
      default:
        this.givenNames = {male: [], female: []};
        this.surnames = [];
    }
  }

  onGenderSelect(g: Gender) {
    this.selectedGender = g;
    this.generateRandomNames(10);
  }

  onCultureSelect(c: Culture) {
    this.selectedCulture = c;
    this.loadNames();
    this.generateRandomNames(10);
  }

  generateRandomNames(n: number) {
    const result: string[] = [];
    const gn = (this.selectedGender === Gender.FEMALE) ? this.getFemaleFirstNames(n) : this.getMaleFirstNames(n);
    const sn = this.getRandomSurnames(n);
    for (let i = 0; i < n; i++) {
      if (gn.length < i) {
        break;
      }
      let name = gn[i];
      if (sn.length > i) {
        name += ' ' + sn[i];
      }
      result.push(name);
    }
    this.generatedNames = result;
  }

  private getMaleFirstNames(n: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < n; i++) {
      result.push(
        this.givenNames.male[
          Math.floor(Math.random() * this.givenNames.male.length)
          ]);
    }
    return result;
  }

  private getFemaleFirstNames(n: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < n; i++) {
      result.push(
        this.givenNames.female[
          Math.floor(Math.random() * this.givenNames.female.length)
          ]);
    }
    return result;
  }

  private getRandomSurnames(n: number = 1): string[] {
    const result: string[] = [];
    if (this.surnames.length > 0) {
      for (let i = 0; i < n; i++) {
        result.push(
          this.surnames[Math.floor(
            Math.random() * this.surnames.length
          )]);
      }
    }
    return result;
  }
}
