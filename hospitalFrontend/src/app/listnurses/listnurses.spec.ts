import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListnursesComponent } from './listnurses';

describe('ListnursesComponent', () => {
  let component: ListnursesComponent;
  let fixture: ComponentFixture<ListnursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListnursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});