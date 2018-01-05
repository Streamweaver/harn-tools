import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NameGeneratorComponent } from './name-generator.component';
import { NamesService } from '../shared/names.service';
import { MockNamesService} from '../shared/testing/mocknameservice';

describe('NameGeneratorComponent', () => {
  let component: NameGeneratorComponent;
  let fixture: ComponentFixture<NameGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameGeneratorComponent ],
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
});
