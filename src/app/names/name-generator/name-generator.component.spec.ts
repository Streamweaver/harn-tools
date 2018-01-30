import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoadingSpinnerComponent} from '../../core/loading-spinner/loading-spinner.component';
import {Culture} from '../shared/culture.enum';
import {Gender} from '../shared/gender.enum';
import {NamesService} from '../shared/names.service';
import {MockNamesService} from '../shared/testing/mocknameservice';
import {NameGeneratorComponent} from './name-generator.component';

describe('NameGeneratorComponent', () => {
  let component: NameGeneratorComponent;
  let fixture: ComponentFixture<NameGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameGeneratorComponent,
        LoadingSpinnerComponent],
      providers: [{provide: NamesService, useClass: MockNamesService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly set the culture', function () {
    expect(component.selectedCulture).toBe(Culture.ENGLISH);
    component.onCultureSelect(Culture.SCANDINAVIAN);
    expect(component.selectedCulture).toBe(Culture.SCANDINAVIAN);
  });

  it('should properly set gender', function () {
    expect(component.selectedGender).toBe(Gender.FEMALE);
    component.onGenderSelect(Gender.MALE);
    expect(component.selectedGender).toBe(Gender.MALE);
  });

  it('should return genreated names', function () {
    expect(component.generatedNames.length).toBe(4);
  });
});
