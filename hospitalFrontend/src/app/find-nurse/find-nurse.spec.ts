import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindNurse } from './find-nurse';
import { FormsModule } from '@angular/forms';


describe('FindNurse', () => {
  let component: FindNurse;
  let fixture: ComponentFixture<FindNurse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindNurse]
    }).compileComponents();

    fixture = TestBed.createComponent(FindNurse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
