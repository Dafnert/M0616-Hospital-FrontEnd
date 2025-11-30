import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindNurseComponent } from './find-nurse';
import { FormsModule } from '@angular/forms';


describe('FindNurse', () => {
  let component: FindNurseComponent;
  let fixture: ComponentFixture<FindNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindNurseComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FindNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
